const findKeyByValue = function(obj, val) {
  for (const item of Object.keys(obj)) {
    if (obj[item] === val) {
      return item;
    }
  }
};

module.exports = findKeyByValue;