function jsonp(url, data = {}, callback = 'callback') {
  data.callback = callback;
  let querystring = url.indexOf('?') === -1 ? '?' : '&';
  for (let property in data) {
      querystring += (a + '=' + data[property]);
  }
  
  let scriptElement = document.createElement('script');
  scriptElement.setProperty('src', url + querystring);
  document.body.appendChild(scriptElement);
  return new Promise((resolve, reject) => {
      window[callback] = (data) => {
          try {
              resolve(data);
          } catch (e) {
              reject(e);
          } finally {
              scriptElement.parentNode.removeChildNode(scriptElement);
          }
      }
  });
}