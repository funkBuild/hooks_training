import { useContext } from 'react'
import { TabContext } from './TabContainer'

export const Tab = props => {
  const {name, children} = props;
  const {openTabName} = useContext(TabContext)
  
  return openTabName === name ? children : null
}
