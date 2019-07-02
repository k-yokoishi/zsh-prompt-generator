import * as React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import PromptPart from './PromptPart';
import { Color } from '../types';

interface PromptPart {
  label: string;
  fgColor: Color | number;
  bgColor: Color | number;
}

interface Props {
  promptParts: PromptPart[];
  onDelete?: (event: any) => void;
  onDragEnd?: (event: any) => void;
}

interface State {
  promptParts: PromptPart[];
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

    const promptParts = reorder<PromptPart>(
      this.state.promptParts,
      result.source.index,
      result.destination.index
    );

    this.setState({
      promptParts,
    });
  }

  render() {
    const { onDelete } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable direction="horizontal" droppableId="prompt-part-view">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                background: 'lightgray',
                overflow: 'auto',
                display: 'flex',
                padding: '8px',
              }}
            >
              {this.state.promptParts.map(({ label, fgColor, bgColor }, i) => (
                <Draggable key={i} draggableId={i.toString()} index={i}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <PromptPart
                        label={label}
                        fgColor={fgColor}
                        bgColor={bgColor}
                        onDelete={onDelete}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default PromptPartView;