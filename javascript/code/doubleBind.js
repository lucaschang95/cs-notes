// 双向绑定

const data = {
  text: 'default'
};

const input = document.getElementById('input');
const span = document.getElementById('span');

// set实现数据变化 --> 视图更新
Object.defineProperty(data, 'text', {

});
