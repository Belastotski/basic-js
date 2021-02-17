const CustomError = require("../extensions/custom-error");

module.exports =
    function repeater(str, options) {
  let repeatTimes = Number(options.repeatTimes) || 1
  let separator = options.separator || '+'
  let addition = options.addition !== undefined? String(options.addition) : ''
  let additionRepeatTimes = addition ? options.additionRepeatTimes || 1 : 0
  let additionSeparator = options.additionSeparator || '|'
  return Array(repeatTimes)
        .fill(String(str).concat(Array(additionRepeatTimes)
                         .fill(addition)
                         .join(additionSeparator)))
        .join(separator)
};
