var promiseResolve = (promiseCrater = function(
  n = 0
  ) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ resolvedAfterNSeconds: n });
    }, n * 1000);
  });;
});
var rejectResolve = (promiseCrater = function(
  n = 0
  ) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject({ rejectedAfterNSeconds: n });
    }, n * 1000);
  });;
});
console.time('Promise.all');
var promisesArray = [];
promisesArray.push(promiseResolve(1));
promisesArray.push(promiseResolve(4));
promisesArray.push(rejectResolve(2));
var handleAllPromises = Promise.all(promisesArray);
handleAllPromises.then(function(values) {
  console.log(values);
});
handleAllPromises.then(function(values) {
  console.log(values);
});