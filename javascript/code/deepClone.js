function deepClone(obj) {
  const type = getType(obj);
  if (type === 'normal') {
    return obj;
  }
  let ans = type === 'object' ? {} : [];
  return ans;
}

function getType(obj) {
  const str = Object.prototype.toString.call(obj);
  console.log(str);
  switch (str) {
    case '[object Object]':
      return 'object';
    case '[object Array]':
      return 'array';

    default:
      return 'others';
  }
}

let map={
  '[object Boolean]'  : 'boolean', 
  '[object Number]'   : 'number', 
  '[object String]'   : 'string', 
  '[object Function]' : 'function', 
  '[object Array]'    : 'array', 
  '[object Date]'     : 'date', 
  '[object RegExp]'   : 'regExp', 
  '[object Undefined]': 'undefined',
  '[object Null]'     : 'null', 
  '[object Object]'   : 'object'
}
