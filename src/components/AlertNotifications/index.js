import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  console.log('hi')

  return (
    <center>
      <h1>Alert Notifications</h1>
      <Notification>
        <div>
          <div className="noti-flex-conta">
            <AiFillCheckCircle className="success" />
            <h1 className="success-h1">Success</h1>
          </div>

          <p>You can access all the files in the folder</p>
        </div>
      </Notification>
      <Notification>
        <div>
          <div className="noti-flex-conta">
            <RiErrorWarningFill className="error" />
            <h1 className="error-h1">Error</h1>
          </div>

          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </Notification>
      <Notification>
        <div>
          <div className="noti-flex-conta">
            <MdWarning className="warning" />
            <h1 className="warning-h1">Warning</h1>
          </div>

          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </Notification>
      <Notification>
        <div>
          <div className="noti-flex-conta">
            <MdInfo className="info" />
            <h1 className="info-h1">Info</h1>
          </div>

          <p>Anyone on the internet can view these files</p>
        </div>
      </Notification>
    </center>
  )
}
export default AlertNotifications
