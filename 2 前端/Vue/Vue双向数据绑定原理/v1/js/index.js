function SelfVue(data, el, exp) {
  this.data = data;
  el.innerHTML = this.data[exp]; // 初始化模板数据的值

  var self = this;

  Object.keys(data).forEach(function (key) {
    self.proxyKeys(key);
  });

  observe(data);

  new Watcher(this, exp, function (value) {
    el.innerHTML = value;
  });
  return this;
}

SelfVue.prototype = {
  proxyKeys: function (key) {
    var self = this;
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function proxyGetter() {
        return self.data[key];
      },
      set: function proxySetter(newVal) {
        self.data[key] = newVal;
      },
    });
  },
};
