import { ContentHeader } from '../../components/Layout'
import { BsTrash2Fill } from 'react-icons/bs';

export const Trash = () => {
  return (
    <>
      <ContentHeader>
        <BsTrash2Fill color="rgb(195,200,205)" />
        Trash
      </ContentHeader>      
    </>
  );
}
