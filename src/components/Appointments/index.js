// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentDetails: [],
    title: '',
    date: '',
  }

  isStarFilled = id => {
    this.setState(prevState => ({
      appointmentDetails: prevState.appointmentDetails.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onAddDetails = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentDetails: [...prevState.appointmentDetails, newAppointment],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {appointmentDetails, title, date} = this.state
    return (
      <div className="bg-container">
        <div className="appointment-card-container">
          <div className="add-appointment">
            <div className="appointment-details">
              <h1 className="heading">Add Appointment</h1>
              <form className="form-element" onSubmit={this.onAddDetails}>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input-element"
                  value={title}
                  onChange={this.onChangeTitle}
                />
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="input-element"
                  value={date}
                  onChange={this.onChangeDate}
                />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-img"
            />
          </div>
          <div className="appointments-container">
            <div className="appointment-name-box">
              <h1 className="heading-2">Appointments</h1>
              <button type="button" className="starred-button">
                Starred
              </button>
            </div>

            <ul className="cards-container">
              {appointmentDetails.map(eachAppointment => (
                <AppointmentItem
                  eachAppointment={eachAppointment}
                  key={eachAppointment.id}
                  isStarFilled={this.isStarFilled}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
