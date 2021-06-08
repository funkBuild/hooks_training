import { useState } from 'react'

import './TodoInputForm.scss';

const TodoInputForm = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

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
          value={title}
          onChange={e => setTitle(e.currentTarget.value)} />
        <textarea
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
