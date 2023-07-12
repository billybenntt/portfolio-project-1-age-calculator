import arrow from '../assets/images/icon-arrow.svg'
import { useState } from 'react'

function Calculator () {

  const [isError, setIsError] = useState(true)

  const [date, setDate] = useState({
    day: '12',
    month: '12',
    year: '1991',
  })

  const handleChange = (e) => {
    let inputName = e.target.name
    let inputValue = e.target.value
    setDate((prevState) => {
      return { ...prevState, [inputName]: inputValue }
    })
  }

  return (
    <section className="section-center">
      <div className="calculator">
        <div className="calculator-center">
          <form className="calculator-input">
            <div>
              <h4 className="input-title">Day</h4>
              <input type="text"
                name="day"
                value={date.day}
                className="input-control"
                onChange={(e) => handleChange(e)}/>
              {isError && <h5 className="input-error">Must be a valid Date</h5>}
            </div>
            <div>
              <h4 className="input-title">Month</h4>
              <input type="text"
                name="month"
                value={date.month}
                className="input-control"
                onChange={(e) => handleChange(e)}/>
              {isError && <h5 className="input-error">Must be a valid Date</h5>}
            </div>
            <div>
              <h4 className="input-title">Year</h4>
              <input type="text"
                value={date.year}
                name="year"
                className="input-control"
                onChange={(e) => handleChange(e)}/>
              {isError && <h5 className="input-error">Must be a valid Date</h5>}
            </div>
          </form>

          <div className="calculator-btn-container">
            <div className="calc-separator"></div>
            <div className="calc-btn">
              <img src={arrow} alt="img" className="calc-btn-img"/>
            </div>
          </div>
          <div className="calculator-output">
            <p className="calculator-output-text">
              <span className="output-amount">- -</span> years
            </p>
            <p className="calculator-output-text">
              <span className="output-amount">- -</span> months
            </p>
            <p className="calculator-output-text">
              <span className="output-amount">- -</span> days
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
