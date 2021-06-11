import { useState, useCallback, useRef, useContext } from 'react'
import useKeypress from '../../hooks/useKeypress'
import { StateContext } from '../../contexts/state'

import './TodoInputForm.scss';

const TodoInputForm = () => {
  const { addNewTodo } = useContext(StateContext);

  const [isComplete, setIsComplete] = useState(false);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const textareaRef = useRef(null);

  const onEnterPressed = useCallback(() => {
    if (document.activeElement === textareaRef.current) {
      console.log('Skip submit whilst the text area is focussed');
      return;
    }

    addNewTodo({
      isComplete,
      title,
      notes
    });

    setIsComplete(false);
    setTitle("");
    setNotes("");
  }, [isComplete, title, notes, addNewTodo]);

  useKeypress("Enter", onEnterPressed);

  return (
    <div className="TodoInputForm">
      <div className="Column FixedWidth">
        <input
          name="isComplete"
          type="checkbox"
          checked={isComplete}
          onChange={e => setIsComplete(e.currentTarget.checked)} />
      </div>

      <div className="Column">
        <input
          name="title"
          placeholder="New To-Do"
          type="text"
          minLength="1"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)} />
        <textarea
          ref={textareaRef}
          placeholder="Notes"
          rows="4"
          value={notes}
          onChange={e => setNotes(e.currentTarget.value)}
          />
      </div>
    </div>
  )
}

export default TodoInputForm
