import { useContext, useCallback } from 'react'
import { TabContext } from './TabContainer'

export const TabLink = props => {
  const { name, children } = props;
  const { setOpenTabName } = useContext(TabContext)

  const onClickHandler = useCallback(() => {
    setOpenTabName(name);
  }, [name, setOpenTabName])

  return (
    <span className="TabLink" onClick={onClickHandler}>
      { children }
    </span>
  )
}
