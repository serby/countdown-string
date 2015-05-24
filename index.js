var moment = require('moment')
  , defaultUnits = [ 'years', 'months', 'days', 'hours', 'minutes' ]

module.exports = function(until, from, customUnits) {
  var untilDate = moment(until)

  if (from === undefined) {
    from = new Date()
  }

  var difference = moment.duration(untilDate.diff(from))
    , output = []
    , units = customUnits || defaultUnits

  units.forEach(function(unit) {
    var value = difference[unit]()
    if (output.length !== 0 || value > 0) output.push(value, deplural(value, unit))
  })

  return output.join(' ')
}

function deplural(amount, unit) {
  if (amount === 1) return unit.slice(0, -1)
  return unit
}
