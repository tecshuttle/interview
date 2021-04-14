function Watcher(vm, exp, cb) {
  this.cb = cb; //callback
  this.vm = vm; //virtual dom
  this.exp = exp;
  this.value = this.get(); // 1. 注册订阅器：读取值
}

Watcher.prototype = {
  update: function () {
    var value = this.vm.data[this.exp];
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  },
  get: function () {
    Dep.target = this; // 2. 注册订阅器：缓存自己，准备数据。
    var value = this.vm.data[this.exp]; // 3. 注册订订阅器：通过取值操作，强制执行监听器里的get()，以调用Dep.addSub()。
    Dep.target = null; // 4.注册订阅器：注册完成，释放自己。
    return value;
  },
};
