import { Layout, Sidebar, Content } from './components/Layout'
import { TabContainer, Tab } from './components/NavigationTabs'

import { Menu } from './views/Menu'
import { Inbox } from './views/Inbox'
import { Today } from './views/Today'
import { Upcoming } from './views/Upcoming'
import { Anytime } from './views/Anytime'
import { Someday } from './views/Someday'
import { Logbook } from './views/Logbook'
import { Trash } from './views/Trash'

import './App.css';

function App() {
  return (
    <Layout>
      <TabContainer initialTab={"inbox"}>
        <Sidebar>
          <Menu />
        </Sidebar>

        <Content>
          <Tab name="inbox">
            <Inbox />
          </Tab>

          <Tab name="today">
            <Today />
          </Tab>

          <Tab name="upcoming">
            <Upcoming />
          </Tab>

          <Tab name="anytime">
            <Anytime />
          </Tab>

          <Tab name="someday">
            <Someday />
          </Tab>

          <Tab name="logbook">
            <Logbook />
          </Tab>

          <Tab name="trash">
            <Trash />
          </Tab>
        </Content>
      </TabContainer>
    </Layout>
  );
}

export default App;
