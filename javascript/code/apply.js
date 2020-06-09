// example: myFunction.apply(thisObj, [other arguments]);

Function.prototype.apply = function() {

  const newThis = arguments[0];
  const args = arguments[1];
  newThis.fn = this;
  const result = newThis.fn(...args);
  delete newThis.fn;
  return args;

};