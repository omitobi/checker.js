let truthy = false;
let result = null;

module.exports =  () => ({
  if(value) {
    truthy = value;

    return this;
  },
  then(callable) {
    if (truthy) {
      result = callable();
    }

    return this;
  },
  else(callable) {
    if (!truthy) {
      return callable();
    }

    return result;
  },
  getResult() {
    return result;
  },
});