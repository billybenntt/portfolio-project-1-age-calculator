import arrow from '../assets/images/icon-arrow.svg'
import moment from "moment/moment";
import {useState} from 'react'

function Calculator() {

    const [isError, setIsError] = useState(true)

    const [date, setDate] = useState({
        day: '',
        month: '',
        year: '',
    })


    const [age, setAge] = useState({
        days: 0,
        months: 0,
        years: 0,
    });


    const checkDate = (date) => {
        const {day, month, year} = date

        const bday = moment(`${year}${day}${month}`)
        const now = moment()

        const duration = moment.duration(bday.diff(now))

        console.log(duration)

        const days = duration.days()
        const months = duration.months()
        const years = duration.years()


        const newAge = {
            days,
            months,
            years,
        }

        console.log(newAge)


        return newAge

    }


    const handleChange = (e) => {
        let inputName = e.target.name
        let inputValue = parseInt(e.target.value)
        setDate((prevState) => {
            return {...prevState, [inputName]: inputValue}
        })

        const newAge = checkDate(date)


        setAge(newAge)
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
                                   placeholder="DD"
                                   value={date.day}
                                   className="input-control"
                                   onChange={(e) => handleChange(e)}/>
                            {isError && <h5 className="input-error">Must be a valid Date</h5>}
                        </div>
                        <div>
                            <h4 className="input-title">Month</h4>
                            <input type="text"
                                   name="month"
                                   placeholder="MM"
                                   value={date.month}
                                   className="input-control"
                                   onChange={(e) => handleChange(e)}/>
                            {isError && <h5 className="input-error">Must be a valid Date</h5>}
                        </div>
                        <div>
                            <h4 className="input-title">Year</h4>
                            <input type="text"
                                   value={date.year}
                                   placeholder="YYYY"
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
                            <span className="output-amount">
                              {age.years === "" ? "- -" : age.years}
                            </span>
                            years
                        </p>
                        <p className="calculator-output-text">
                            <span className="output-amount">
                              {age.months === "" ? "- -" : age.months}
                            </span>
                            months
                        </p>
                        <p className="calculator-output-text">
                            <span className="output-amount">
                              {age.days === "" ? "- -" : age.days}
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
