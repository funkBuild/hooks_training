import { ContentHeader } from '../../components/Layout'
import { FaStar } from 'react-icons/fa';

export const Today = () => {
  return (
    <>
      <ContentHeader>
        <FaStar color="rgb(255,212,0)" />
        Today
      </ContentHeader>      
    </>
  );
}
