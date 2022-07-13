import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import './index.css'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="bg_container">
    <h1>Alert Notifications</h1>
    <Notification>
      <div className="notification_container">
        <div>
          <AiFillCheckCircle className="react_icons_success" />
        </div>
        <div className="notification_heading">
          <h1 className="heading_success">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notification_container">
        <div>
          <RiErrorWarningFill className="react_icons_error" />
        </div>
        <div className="notification_heading">
          <h1 className="heading_error">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notification_container">
        <div>
          <MdWarning className="react_icons_Warning" />
        </div>
        <div className="notification_heading">
          <h1 className="heading_warning">Warning</h1>
          <p>Viewers of this file can see comments and suggestions"</p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notification_container">
        <div>
          <MdInfo className="react_icons_Info" />
        </div>
        <div className="notification_heading">
          <h1 className="heading_Info">Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
