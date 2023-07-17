function isValidDate({year, month, day}) {

    const error = {status: false, year: '', month: '', day: ''}
    const formatDate = new Date(year, month - 1, day)
    const isValidYear = new Date().getTime() >= formatDate.getTime()
    const isValidMonth = (12 % month) <= 5
    const isEmptyValue = [(!year && 'year'), (!month && 'month'), (!day && 'day')]
    const isValidDay = day <= (28 + (month + Math.floor(month / 8)) % 2 + 2 % month + 2 * Math.floor(1 / month))


    if (isEmptyValue[0] || isEmptyValue[1] || isEmptyValue[2]) {
        error.status = true
        error.day = isEmptyValue[2] && 'This field is required'
        error.month = isEmptyValue[1] && 'This field is required'
        error.year = isEmptyValue[0] && 'This field is required'
        return error
    }

    if (!isValidMonth) {
        error.status = true
        error.month = 'Enter Valid Month'
        return error
    }

    if (!isValidDay) {
        error.status = true
        error.day = 'Must be a valid Date'
        return error
    }

    if (!isValidYear) {
        error.status = true
        error.year = 'No time traveling pls'
        return error
    }


    return error
}

export default isValidDate