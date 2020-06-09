class Promise {
  constructor(executor) {
    this.status = 'pending';
    this.resolveData = null;
    this.rejectData = null;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    
    this.resolve = (data) => {
      if (this.status === 'pending') {
        this.status = 'resolved';
        this.resolveData = data;
        this.resolvedCallbacks.forEach((callback) => {
          callback(this.resolveData);
        });
      }
    };

    this.reject = (error) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.rejectData = error;
        this.rejectedCallbacks.forEach(callback => {
          callback(this.rejectData);
        });
      }
    };

    this.resolvePromise = (data, resolve, reject) => {
      if (data instanceof Promise) {
        if (data.status === 'pending') {
          data.then((val) => {
            this.resolvePromise(val, resolve, reject)
          , reject}) 
        } else if (data.statu === 'resolved') {
          resolve(data.resolveData);
        } else {
          reject(data.rejectData);
        }
      }
    };

    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    let promise;

    if (this.status === 'pending') {
      promise = new Promise((resolve, reject) => {
        this.resolvedCallbacks.push(() => {
          if (!(onFulfilled instanceof Function)) {
            resolve(this.resolveData);
          } else {
            let data = onFulfilled(this.resolveData);
            this.resolvePromise(data, resolve, reject);
          }
        });

        this.rejectedCallbacks.push(() => {
          if (!(onRejected instanceof Function)) {
            reject(this.rejectData)
          } else {
            let data = onRejected(this.rejectData);
            this.resolvePromise(data, resolve, reject);
          }
        });
      });
    }

    if (this.status === 'resolved') {
      promise = new Promise
    }

    return promise;
  }

}