import "./Layout.scss"

export const Layout = ({ children }) => {
  return (
    <div className="Layout">
      { children }
    </div>
  )
}

export const Sidebar = ({ children }) => {
  return (
    <div className="Sidebar">
      { children }
    </div>
  )
}

export const Content = ({ children }) => {
  return (
    <div className="Content">
      { children }
    </div>
  )
}

export const ContentHeader = ({ children }) => {
  return (
    <h1 className="ContentHeader">
      { children }
    </h1>
  )
}
