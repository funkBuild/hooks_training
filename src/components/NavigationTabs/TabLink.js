import { useContext, useCallback, useMemo } from 'react'
import { TabContext } from './TabContainer'

export const TabLink = props => {
  const { name, children } = props;
  const { openTabName, setOpenTabName } = useContext(TabContext)

  const onClickHandler = useCallback(() => {
    setOpenTabName(name);
  }, [name, setOpenTabName])

  const classNames = useMemo(() => {
    let classes = [ "TabLink" ];

    if (openTabName === name)
      classes.push("selected");

    return classes.join(' ');
  }, [openTabName, name])

  return (
    <span className={ classNames } onClick={onClickHandler}>
      { children }
    </span>
  )
}
