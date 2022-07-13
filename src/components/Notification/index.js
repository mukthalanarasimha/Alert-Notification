import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="children_container">
      <div className="notification_container_main">{children}</div>
      <GrFormClose />
    </div>
  )
}

export default Notification
