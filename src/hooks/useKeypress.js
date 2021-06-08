import {useEffect} from 'react'

const useKeypress = (keyName, callback) => {
  useEffect(() => {
    const keyHandler = ({key}) => {
      if(key === keyName)
        callback();
    }

    document.addEventListener('keypress', keyHandler);

    return () => {
      document.removeEventListener('keypress', keyHandler);
    }
  })
}

export default useKeypress;
