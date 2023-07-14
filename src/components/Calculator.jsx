import arrow from '../assets/images/icon-arrow.svg'
import {useState} from 'react'

function Calculator() {

    const [isError, setIsError] = useState({
        state: true,
        error_1: "",
        error_2: "",
        error_3: ""
    })

    const [date, setDate] = useState({
        day: '',
        month: '',
        year: '',
    })

    const [age, setAge] = useState({
        days: -1,
        months: -1,
        years: -1,
    });


    function isValidDate(date) {

        const {year, month, day} = date;
        const result = new Date(year, month - 1, day);
        console.log(result)

    }


    function calculateAge(date) {
        const {year, month, day} = date;
        const today = new Date();
        const birthDay = new Date(year, month - 1, day);

        console.log(birthDay.parse)


        let months;
        let days;
        let years = today.getFullYear() - birthDay.getFullYear();


        // Step 2: Calculate the number of full months (stop before reaching today)
        if (today.getMonth() < birthDay.getMonth()) {
            years--;
            months = 12 - birthDay.getMonth() + today.getMonth();
        } else {
            months = today.getMonth() - birthDay.getMonth();
        }

        // Step 3: Calculate the number of days
        if (today.getDate() < birthDay.getDate()) {
            months--;
            const millisecondsPerDay = 1000 * 60 * 60 * 24;
            const timeDiff = today - new Date(today.getFullYear(), today.getMonth() - 1, birthDay.getDate());
            days = timeDiff / millisecondsPerDay;
        } else {
            days = today.getDate() - birthDay.getDate();
        }


        return {years, months, days};
    }


    const handleChange = (e) => {
        let inputName = e.target.name
        let inputValue = parseInt(e.target.value)
        setDate((prevState) => {
            return {...prevState, [inputName]: inputValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        isValidDate(date)


        const newAge = calculateAge(date)


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
                            {isError.state && <h5 className="input-error">Must be a valid Date</h5>}
                        </div>
                        <div>
                            <h4 className="input-title">Month</h4>
                            <input type="text"
                                   name="month"
                                   placeholder="MM"
                                   value={date.month}
                                   className="input-control"
                                   onChange={(e) => handleChange(e)}/>
                            {isError.state && <h5 className="input-error">Must be a valid Date</h5>}
                        </div>
                        <div>
                            <h4 className="input-title">Year</h4>
                            <input type="text"
                                   value={date.year}
                                   placeholder="YYYY"
                                   name="year"
                                   className="input-control"
                                   onChange={(e) => handleChange(e)}/>
                            {isError.state && <h5 className="input-error">Must be a valid Date</h5>}
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
                              {age.years < 0 ? "- -" : age.years}
                            </span>
                            years
                        </p>
                        <p className="calculator-output-text">
                            <span className="output-amount">
                              {age.months < 0 ? "- -" : age.months}
                            </span>
                            months
                        </p>
                        <p className="calculator-output-text">
                            <span className="output-amount">
                              {age.days < 0 ? "- -" : age.days}
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
