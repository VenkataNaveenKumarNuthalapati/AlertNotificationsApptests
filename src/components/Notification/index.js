import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <center>
      <div className="noti-container">
        {children}
        <GrFormClose className="close" />
      </div>
    </center>
  )
}

export default Notification
