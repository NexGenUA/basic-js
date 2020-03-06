module.exports = function repeater(str, options) {
  const { repeatTimes, separator  = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '' } = options;
  str += (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  return (str + separator).repeat(repeatTimes - 1) + str;
};
