let salesOffices = {};
salesOffices.clientList = {};
salesOffices.listen = function(key, callback) {
  if (!salesOffices.clientList[key]) {
    salesOffices.clientList[key] = [];
  }
  salesOffices.clientList[key].push(callback);
};
salesOffices.trigger = function() {
  let key = Array.prototype.shift.call(arguments), callbackArr = salesOffices.clientList[key];
  if (!callbackArr || callbackArr.length === 0) return false;

  callbackArr.forEach((callback) => {
    callback.apply(this, arguments);
  });
}

salesOffices.listen('88', (price) => {
  console.log('我是小明');
  console.log(`价格: ${price}`);
});

salesOffices.listen('110', (price) => {
  console.log('我是小红');
  console.log(`价格: ${price}`);
});

salesOffices.trigger('88', 10000);
salesOffices.trigger('110', 10000);

// 包装成event
let event = {
  clientList: {},
  listen: function(key, callback) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(callback);
  },
  trigger: function() {
    let key = Array.prototype.shift.call(arguments), callbackArr = salesOffices.clientList[key];
    if (!callbackArr || callbackArr.length === 0) return false;
    callbackArr.forEach((callback) => {
      callback.apply(this, arguments);
    });
  },
  remove: function(key, callback) {
    if (!this[key]) {
      return false;
    }
    if (!callback) {
      this[key] = 0;
    } else {
      for (let l = this[key].length - 1; l >= 0; l--) {
        if (callback === this[key][l]) {
          this[key].splice(l, 1);
        }
      }
    }
  }
};

// 在来一个函数, 对对象赋值这几个属性, 相当于给这个对象安装了发布-订阅功能