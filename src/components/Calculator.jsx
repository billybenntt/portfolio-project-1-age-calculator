import arrow from '../assets/images/icon-arrow.svg'
import { useState } from 'react'
import isValidDate from '../../utilities/isValidDate.js'

function Calculator () {

  const [isError, setIsError] = useState({ status: true, year: '', month: '', day: '' })
  const [date, setDate] = useState({ day: '', month: '', year: '' })
  const [age, setAge] = useState({ days: -1, months: -1, years: -1 })



  function calculateAge (date) {
    const { year, month, day } = date
    const today = new Date()
    const birthDay = new Date(year, month - 1, day)

    let months
    let days
    let years = today.getFullYear() - birthDay.getFullYear()

    // Step 2: Calculate the number of full months (stop before reaching today)
    if (today.getMonth() < birthDay.getMonth()) {
      years--
      months = 12 - birthDay.getMonth() + today.getMonth()
    } else {
      months = today.getMonth() - birthDay.getMonth()
    }

    // Step 3: Calculate the number of days
    if (today.getDate() < birthDay.getDate()) {
      months--
      const millisecondsPerDay = 1000 * 60 * 60 * 24
      const timeDiff = today - new Date(today.getFullYear(), today.getMonth() - 1, birthDay.getDate())
      days = Math.floor(timeDiff / millisecondsPerDay)
    } else {
      days = today.getDate() - birthDay.getDate()
    }

    return { years, months, days }
  }

  const handleChange = (e) => {
    let inputName = e.target.name
    let inputValue = parseInt(e.target.value)
    setDate((prevState) => {
      return { ...prevState, [inputName]: inputValue }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const error = isValidDate(date)

    if (!error.status) {
      const newAge = calculateAge(date)
      setAge(newAge)
      setIsError({ status: false, year: '', month: '', day: '' })
    } else {
      setIsError(error)
    }

  }

  return (
    <section className="section-center">
      <div className="calculator">
        <div className="calculator-center">
          <form className="calculator-input">
            <div>
              <h4 className="input-title">Day</h4>
              <input type="number"
                name="day"
                pattern="[0-9]+"
                placeholder="DD"
                value={date.day}
                className="input-control"
                onChange={(e) => handleChange(e)}/>
              {isError.status && <h5 className="input-error">{isError.day}</h5>}
            </div>
            <div>
              <h4 className="input-title">Month</h4>
              <input type="number"
                name="month"
                pattern="[0-9]+"
                placeholder="MM"
                value={date.month}
                className="input-control"
                onChange={(e) => handleChange(e)}/>
              {isError.status && <h5 className="input-error">{isError.month}</h5>}
            </div>
            <div>
              <h4 className="input-title">Year</h4>
              <input type="number"
                value={date.year}
                pattern="[0-9]+"
                placeholder="YYYY"
                name="year"
                className="input-control"
                onChange={(e) => handleChange(e)}/>
              {isError.status && <h5 className="input-error">{isError.year}</h5>}
            </div>
          </form>

          <div className="calculator-btn-container">
            <div className="calc-separator"></div>
            <div className="calc-btn" onClick={handleSubmit}>
              <img src={arrow} alt="img" className="calc-btn-img"/>
            </div>
          </div>
          <div className="calculator-output">
            <p className="calculator-output-text">
                            <span className="output-amount">
                              {age.years < 0 ? '- -' : age.years}
                            </span>
              years
            </p>
            <p className="calculator-output-text">
                            <span className="output-amount">
                              {age.months < 0 ? '- -' : age.months}
                            </span>
              months
            </p>
            <p className="calculator-output-text">
                            <span className="output-amount">
                              {age.days < 0 ? '- -' : age.days}
                            </span>
              days
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
