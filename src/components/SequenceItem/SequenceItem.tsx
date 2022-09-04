import './SequenceItem.scss';
import { Colors } from '../../constants/colors.enum';
import { useDrag, useDrop } from 'react-dnd'
import { useState } from 'react';

interface SequenceItemProps {
  color?: Colors;
  visibility?: boolean;
  draggable?: boolean;
  onChange?: (color: Colors) => void
}

function SequenceItem({ color, visibility, draggable = false, onChange }: SequenceItemProps) {
  const [state, setState] = useState({color: color});

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "A",
    item: () => ({ color }),
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end(draggedItem, monitor) {
      if (monitor.didDrop()) {
        setState((prev: SequenceItemProps) => ({ ...prev, color: undefined }));
      }
    },
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "A",
    drop: (data: {color: Colors}) => {
      setState((prev: SequenceItemProps) => ({ ...prev, color: data.color }));
      onChange?.(data.color);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const itemProps = {
    ref: draggable ? drag : null,
    style: {
      opacity: isDragging ? 0.3 : 1,
      cursor: "move",
    },
  };

  return (
    <div className="SequenceItem">
      {state.color ? (
        <div
          className={`color-${state.color} visibility-${visibility}`}
          {...itemProps}
        >
          <img
            src={`${process.env.PUBLIC_URL}/pearls/${
              visibility === false ? "unknown" : state.color
            }.png`}
          />
        </div>
      ) : (
        <div className="empty" ref={drop}></div>
      )}
    </div>
  );
};

export default SequenceItem;
