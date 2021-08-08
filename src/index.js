exports.min = function min(array) {
  if (!array || !array.length) {
    return 0;
  }
  else {
    const sortArr = (a, b) => a - b;
    array = array.sort(sortArr);
    return array[0];
  }
}

exports.max = function max(array) {
  if (!array || !array.length) {
    return 0;
  }
  else {
    const sortArr = (a, b) => b - a;
    array = array.sort(sortArr);
    console.log(array);
    return array[0];
  }
}

exports.avg = function avg(array) {
  if (!array || !array.length) {
    return 0;
  }
  else {
    const reducer = (sum, arr) => sum + arr;
    let res = array.reduce(reducer);
    return res / array.length;
  }

}

