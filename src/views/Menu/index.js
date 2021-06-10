import { TabLink } from '../../components/NavigationTabs'

import { FaInbox, FaStar } from 'react-icons/fa';
import { ImBook, ImStack } from 'react-icons/im';
import { BiBox } from 'react-icons/bi';
import { BsTrash2Fill } from 'react-icons/bs';
import { IoCalendarOutline } from 'react-icons/io5';

const Spacer = () => <div style={{ height: "20px" }}/>

export const Menu = () => (
  <>
    <TabLink name="inbox">
      <FaInbox color="rgb(30,175,248)" />
      Inbox
    </TabLink>

    <TabLink name="today">
      <FaStar color="rgb(255,212,0)" />
      Today
    </TabLink>

    <TabLink name="upcoming">
      <IoCalendarOutline color="rgb(255,48,108)" />
      Upcoming
    </TabLink>

    <TabLink name="anytime">
      <ImStack color="rgb(75,175,165)" />
      Anytime
    </TabLink>

    <TabLink name="someday">
      <BiBox color="rgb(210,199,141)" />
      Someday
    </TabLink>

    <Spacer/>

    <TabLink name="logbook">
      <ImBook color="rgb(81,193,100)" />
      Logbook
    </TabLink>

    <TabLink name="trash">
      <BsTrash2Fill color="rgb(195,200,205)" />
      Trash
    </TabLink>
  </>
)
