import TodoInputForm from '../../components/TodoInputForm'
import { ContentHeader } from '../../components/Layout'
import { FaInbox } from 'react-icons/fa';

export const Inbox = () => {
  return (
    <>
      <ContentHeader>
        <FaInbox color="rgb(30,175,248)" />
        Inbox
      </ContentHeader>
      
      <TodoInputForm />
    </>
  );
}
