module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) !== "[object Array]")
    throw new Error();

  var result = [];

  function idx(d) {
    return [
      "--discard-next",
      "--discard-prev",
      "--double-next",
      "--double-prev"
    ].indexOf(d);
  }

  for (var i = 0; i < arr.length; i++) {
    if (idx(arr[i]) === 0) {
      i++;
      continue;
    }
    if (idx(arr[i]) === 1) {
      result.pop();
      continue;
    }
    if (idx(arr[i]) === 2) {
      if (i + 1 < arr.length) result.push(arr[i + 1]);     
      continue;
    }
    if (idx(arr[i]) === 3) {
      if (i > 0) result.push(arr[i - 1]);
      continue;
    }
    result.push(arr[i]);
  }
  return result;
};
