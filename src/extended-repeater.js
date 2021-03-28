const CustomError = require("../extensions/custom-error");
module.exports = function repeater(str, options) {
    if (!(str || options)) return false
    let {
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|',
    } = options

    str = String(str)
    addition = String(addition)

    let additionsString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator)
    let fullString = new Array(repeatTimes).fill(str + additionsString).join(separator)

    return fullString
}
  
