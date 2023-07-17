import arrow from '../assets/images/icon-arrow.svg'
import {useState} from 'react'
import isValidDate from '../../utilities/isValidDate.js'
import calculateAge from "../../utilities/calculateAge.js";

function Calculator() {

    const [isError, setIsError] = useState({status: false, year: 'error', month: 'error', day: 'error'})
    const [date, setDate] = useState({day: '', month: '', year: ''})
    const [age, setAge] = useState({days: -1, months: -1, years: -1})
    const isActive = isError.status ? "active" : ""


    const handleChange = (e) => {
        let inputName = e.target.name
        let inputValue = parseInt(e.target.value)
        setDate((prevState) => {
            return {...prevState, [inputName]: inputValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const error = isValidDate(date)
        if (!error.status) {
            const newAge = calculateAge(date)
            setAge(newAge)
            setIsError({status: false, year: 'error', month: 'error', day: 'error'})
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
                            <h4 className={`input-title ${isActive}`}>
                                Day
                            </h4>
                            <input type="number"
                                   name="day"
                                   pattern="[0-9]+"
                                   placeholder="DD"
                                   value={date.day}
                                   className={`input-control ${isActive}`}
                                   onChange={(e) => handleChange(e)}/>
                            <h5 className={`input-error ${isActive}`}>
                                {isError.day}
                            </h5>
                        </div>
                        <div>
                            <h4 className={`input-title ${isActive}`}>
                                Month
                            </h4>
                            <input type="number"
                                   name="month"
                                   pattern="[0-9]+"
                                   placeholder="MM"
                                   value={date.month}
                                   className={`input-control ${isActive}`}
                                   onChange={(e) => handleChange(e)}/>
                            <h5 className={`input-error ${isActive}`}>
                                {isError.month}
                            </h5>
                        </div>
                        <div>
                            <h4 className={`input-title ${isActive}`}>
                                Year
                            </h4>
                            <input type="number"
                                   value={date.year}
                                   pattern="[0-9]+"
                                   placeholder="YYYY"
                                   name="year"
                                   className={`input-control ${isActive}`}
                                   onChange={(e) => handleChange(e)}/>
                            <h5 className={`input-error ${isActive}`}>
                                {isError.year}
                            </h5>
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
