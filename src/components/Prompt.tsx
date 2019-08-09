import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { equals } from 'rambda';
import PromptItem from './PromptItem';
import { PromptID, Color, IPromptItem } from '../types';

type PromptItem = Omit<Omit<IPromptItem, 'shStr'>, 'promptStr'>;

interface Props {
  promptItems: PromptItem[];
  selected?: boolean;
  bgColor?: Color;
  onClick?: () => void;
  onItemClick?: (id: PromptID) => void;
  onDelete?: (id: PromptID) => void;
  onDragEnd?: (event: any) => void;
}

interface State {
  promptItems: PromptItem[];
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

  componentDidUpdate() {
    if (!equals(this.state.promptItems, this.props.promptItems)) {
      this.setState({ promptItems: this.props.promptItems });
    }
  }
  onDragEnd(result: DropResult) {
    if (!!this.props.onDragEnd) {
      this.props.onDragEnd(result);
    }

    // dropped outside of Droppable
    if (!result.destination) return;

    const promptItems = reorder<PromptItem>(
      this.state.promptItems,
      result.source.index,
      result.destination.index
    );

    this.setState({
      promptItems,
    });
  }

  render() {
    const { bgColor = '#3E3A39', selected, onClick, onItemClick, onDelete } = this.props;
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
                borderRadius: '4px',
                border: 'solid 4px',
                borderColor: selected ? 'cyan' : bgColor,
                cursor: 'pointer',
              }}
              onClick={onClick}
            >
              {this.state.promptItems.map(
                ({ id, displayStr, fgColor, bgColor, selected = false }, i) => (
                  <Draggable key={i} draggableId={i.toString()} index={i}>
                    {(provided, snapshot) => (
                      <Typography
                        component="div"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PromptItem
                          id={id}
                          displayStr={displayStr}
                          fgColor={fgColor}
                          bgColor={bgColor}
                          selected={selected}
                          onClick={onItemClick}
                          onDelete={onDelete}
                        />
                      </Typography>
                    )}
                  </Draggable>
                )
              )}
              {provided.placeholder}
            </Typography>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default PromptItemView;
