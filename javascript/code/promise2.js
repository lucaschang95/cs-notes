function Promise(executor) {
  let self = this;
  this.state = 'pending';
  this.value = null;
  this.reason = null;
  this.resolvedCallback = [];
  this.rejectedCallback = [];

  function resolve(value) {
    if (self.state === 'pending') {
      self.value = value;
      self.state = 'resolved';
      this.resolvedCallback.forEach(callback => callback(value));
    }
  }

  function reject(reason) {
    if (self.state === 'pending') {
      self.reason = reason;
      self.state = 'rejected';
      this.rejectedCallback.forEach(callback => callback(reason));
    }
  }

  executor(resolve, reject);
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.state === 'pending') {
    if (typeof onFulfilled === 'function') {
      this.resolvedCallback.push(onFulfilled);
    }
    if (typeof onRejected === 'function') {
      this.resolvedCallback.push(onRejected);
    }
  }

  if (this.state === 'resolved') {
    if (typeof onFulfilled === 'function') {
      onFulfilled(this.value);
    }
  }

  if (this.state === 'rejected') {
    if (typeof onRejected === 'function') {
      onRejected(this.reason);
    }
  }

  let promise2 = new Promise();

  return promise2;
};

function resolvePromise(promise2, x, resolve, reject) {
  
}