import { useState } from 'react';
import { BiNote } from 'react-icons/bi';

import "./Todo.scss"

export const Todo = ({value}) => {
  const [isSelected, setIsSelected] = useState(false);
  const { isComplete, title, notes } = value;

  return (
    <div
      className="Todo"
      onClick={ () => setIsSelected(!isSelected)}
      >
      <span className="IsComplete">
        <input
          name="isComplete"
          type="checkbox"
          checked={ isComplete }
          />
      </span>

      <span className="Title">
        { title }
      </span>

      <span className="Icons">
        { notes && notes.length > 0 && <BiNote />}
      </span>
    </div>
  );
}
