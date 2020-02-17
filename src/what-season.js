module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  var m = date.getMonth();

  if (Object.keys(date).length > 0) {
    throw new Error();
  }

  return /2|3|4/.test(m) 
         ? 'spring' : /5|6|7/.test(m)
         ? 'summer' : /8|9|10/.test(m)
         ? 'autumn' : 'winter'
 
};
