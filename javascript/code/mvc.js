let Model = {
  create: function() {
    this.records = {};
    let object = Object.create(this);
    object.prototype = Object.create(this.prototype);
    return object;
  },

  find: function() {
    return this.records[this.id];
  },

  save: function() {
    this.records[this.id] = this;
  }
};


let ToggleView = {
  init: function(view) {
    this.view = view;
  }
}