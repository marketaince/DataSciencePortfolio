// Limit number of characters displayed in description
export default value => {

  if (value.length <= 160) {
    return value
  } else {
    return value.substr(0, 160) + '...'
  }
}