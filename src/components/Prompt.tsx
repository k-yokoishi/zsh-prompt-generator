import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import PromptPart from './PromptPart';
import { Color, IPromptPart } from '../types';

interface SelectablePromptPart extends IPromptPart {
  selected?: boolean;
}

interface Props {
  promptParts: SelectablePromptPart[];
  bgColor?: Color;
  onDelete?: (event: any) => void;
  onDragEnd?: (event: any) => void;
}

interface State {
  promptParts: IPromptPart[];
}

function reorder<T>(list: Array<T>, startIndex: number, endIndex: number): Array<T> {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

class PromptPartView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      promptParts: props.promptParts,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result: DropResult) {
    if (!!this.props.onDragEnd) {
      this.props.onDragEnd(result);
    }

    // dropped outside of Droppable
    if (!result.destination) return;

    const promptParts = reorder<IPromptPart>(
      this.state.promptParts,
      result.source.index,
      result.destination.index
    );

    this.setState({
      promptParts,
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
              {this.state.promptParts.map(({ label, fgColor, bgColor, selected = false }, i) => (
                <Draggable key={i} draggableId={i.toString()} index={i}>
                  {(provided, snapshot) => (
                    <Typography
                      component="div"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <PromptPart
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

export default PromptPartView;
