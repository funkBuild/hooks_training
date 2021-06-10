import { createContext, useState } from "react"

export const TabContext = createContext({})

export const TabContainer = props => {
  const {initialTab, children} = props;
  const [openTabName, setOpenTabName] = useState(initialTab);

  return (
    <TabContext.Provider value={{openTabName, setOpenTabName}}>
      { children }
    </TabContext.Provider>
  )
}
