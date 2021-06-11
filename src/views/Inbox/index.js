import { useContext } from 'react'
import { FaInbox } from 'react-icons/fa';

import TodoInputForm from '../../components/TodoInputForm'
import { ContentHeader } from '../../components/Layout'
import { StateContext } from '../../contexts/state'
import { Todo } from '../../components/Todo'


export const Inbox = () => {
  const { todos } = useContext(StateContext);

  return (
    <>
      <ContentHeader>
        <FaInbox color="rgb(30,175,248)" />
        Inbox
      </ContentHeader>
      
      <TodoInputForm />

      {
        todos.map( todo => <Todo key={todo.id} value={todo} />)
      }
    </>
  );
}
