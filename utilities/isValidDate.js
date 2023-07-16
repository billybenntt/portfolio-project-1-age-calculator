function isValidDate ({ year, month, day }) {

  const error = { status: false, year: '', month: '', day: '' }
  const formatDate = new Date(year, month - 1, day)
  const isValidYear = new Date().getFullYear() >= formatDate.getFullYear()
  const isValidMonth = 12 % month !== 12 || 12 % month >= 0
  const isEmptyValue = [(!year && 'year'), (!month && 'month'), (!day && 'day')]
  const isValidDay = day <= (28 + (month + Math.floor(month / 8)) % 2 + 2 % month + 2 * Math.floor(1 / month))

  if (isEmptyValue[0]) {
    error.status = true
    error.year = 'This field is required'
    return error
  }

    if (!isValidMonth) {
    error.status = true
    error.month = 'Enter Valid Month'
    return error
  }


  if (isEmptyValue[1]) {
    error.status = true
    error.month = 'This field is required'
    return error
  }

  if (isEmptyValue[2]) {
    error.status = true
    error.day = 'This field is required'
    return error
  }

  if (!isValidDay) {
    error.status = true
    error.day = 'Must be a valid Date'
    return error
  }

  if (!isValidYear) {
    error.status = true
    error.year = 'Enter year from the past'
  }


  if (isEmptyValue[2]) {
    error.status = true
    error.day = 'This field is required'
  }

  console.log(error)

  return error
}

export default isValidDate