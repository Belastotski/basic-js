module.exports =
function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!'
  const season = [
    'winter',
    'spring',
    'summer',
    'autumn'
  ]
    // if (Object.keys(date).length) return new Error()
  try{
    date.toJSON()
    return date.getMonth() === 11?  season[0] : season[Math.floor((date.getMonth() + 1)/3)]
  } catch (e) {
    throw new Error()
  }
};
