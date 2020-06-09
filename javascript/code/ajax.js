function ajax(options) {
  let xhr = new XMLHttpRequest();

  return new Promise(
    function(resolve, reject) {
      xhr.open(options.requestMethod, options.url, options.isAsync);
      // Set request header
      for (let header in options.requestHeaders) {
        xhr.setRequestHeader(header, options.requestHeaders[header]);
      }
      // 注册事件
      xhr.timeout = 100;
      xhr.onabort = function() {
        reject({ errorTyps: 'abort', xhr: xhr });
      };
      xhr.onerror = function() {
        reject({ errorTyps: 'error', xhr: xhr });
      };
      xhr.onloadend = function() {
        if ((xhr.status >= 200 & xhr.status < 300) || xhr.status === 304) {
          resolve(xhr);
        } else {
          reject({ errorType: 'status_errpr', xhr: xhr});
        }
      }
      try {
        xhr.send(options.data);
      } catch (e) {
        reject({ errorType: 'send_error'});
        error: e
      }
    }
  );
}

ajax(yourOptions)
.then(function(xhr) {
  console.log(xhr.response);
}, function(e) {
  console.log(e);
});



function ajaxV2(options) {
  let xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.open(options.method, options.url, options.isAsync);
    for (let header in options.headers) {
      xhr.setRequestHeader(header, options.headers[header]);
    }
    xhr.timeout = options.timeout;
    xhr.ontimeout = function() {
      reject({
        name: 'TimeoutError',
        message: 'timeout!'
      });
    };

    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        // handle 200, 404...
        if ((xhr.status >= 200 & xhr.status < 300) || xhr.status === 304) {
          resolve(xhr);
        } else {
          reject({ errorType: 'status_errpr', xhr: xhr});
        }
      }
    };
    xhr.send();
  });
}