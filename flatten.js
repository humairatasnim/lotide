const flatten = function(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      output.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        output.push(arr[i][j]);
      }
    }
  }
  return output;
};

module.exports = flatten;