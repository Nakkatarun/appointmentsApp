// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, isStarFilled} = props
  const {title, date, id, isStarred} = eachAppointment

  const dateFormat = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const isFilled = () => {
    isStarFilled(id)
  }

  const star = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-card">
      <div className="card">
        <div className="title-container">
          <p className="title">{title}</p>
          <button
            type="button"
            className="star-button"
            onClick={isFilled}
            data-testid="star"
          >
            <img src={star} alt="star" className="star" />
          </button>
        </div>
        <p className="date">{dateFormat}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
