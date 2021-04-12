function SelfVue(data, el, exp) {
  this.data = data; //通过new 方法生成的对象，this是指对象本身。
  this.el = el;
  this.el.innerHTML = this.data[exp]; // 初始化模板数据的值

  Object.keys(data).forEach(function (key) {
    this.proxyKeys(key);
  }, this /* 不传值，this会指向window */);
}

SelfVue.prototype = {
  proxyKeys: function (key) {
    Object.defineProperty(this, key, {
      set: function proxySetter(newVal) {
        this.el.innerHTML = newVal;
        this.data[key] = newVal;
      },
    });
  },
};
