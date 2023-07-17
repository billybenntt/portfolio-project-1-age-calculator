function calculateAge(date) {
    const {year, month, day} = date
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


    return {years, months, days}
}

export default calculateAge