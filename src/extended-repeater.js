module.exports = function repeater(str, { repeatTimes, separator  = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '' }) {
  str += (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  return (str + separator).repeat(repeatTimes - 1) + str;
};
