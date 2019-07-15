import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import PromptItem from './PromptItem';
import { Color, IPromptItem } from '../types';

interface SelectablePromptItem extends IPromptItem {
  selected?: boolean;
}

interface Props {
  promptItems: SelectablePromptItem[];
  bgColor?: Color;
  onDelete?: (event: any) => void;
  onDragEnd?: (event: any) => void;
}

interface State {
  promptItems: SelectablePromptItem[];
}

function reorder<T>(list: Array<T>, startIndex: number, endIndex: number): Array<T> {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

class PromptItemView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      promptItems: props.promptItems,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result: DropResult) {
    if (!!this.props.onDragEnd) {
      this.props.onDragEnd(result);
    }

    // dropped outside of Droppable
    if (!result.destination) return;

    const promptItems = reorder<SelectablePromptItem>(
      this.state.promptItems,
      result.source.index,
      result.destination.index
    );

    this.setState({
      promptItems,
    });
  }

  render() {
    const { bgColor = 'black', onDelete } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable direction="horizontal" droppableId="prompt-part-view">
          {(provided, snapshot) => (
            <Typography
              component="div"
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                background: bgColor,
                overflow: 'auto',
                display: 'flex',
                padding: '8px',
                minHeight: '48px',
                alignItems: 'center',
              }}
            >
              {this.state.promptItems.map(({ label, fgColor, bgColor, selected = false }, i) => (
                <Draggable key={i} draggableId={i.toString()} index={i}>
                  {(provided, snapshot) => (
                    <Typography
                      component="div"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <PromptItem
                        label={label}
                        fgColor={fgColor}
                        bgColor={bgColor}
                        selected={selected}
                        onDelete={onDelete}
                      />
                    </Typography>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Typography>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default PromptItemView;
