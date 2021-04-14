function Observer(data) {
  this.data = data;
  this.walk();
}

Observer.prototype = {
  walk: function () {
    // 1. 对这个对象的所有属性都进行监听
    Object.keys(this.data).forEach(function (key) {
      this.defineReactive(this.data, key, this.data[key]);
    }, this);
  },
  defineReactive: function (data, key, val) {
    var dep = new Dep();

    Object.defineProperty(data, key, {
      get: function () {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return val;
      },
      // setter，如果对一个对象属性值改变，就会触发setter中的dep.notify(), 通知watcher（订阅者）数据变更，执行对应订阅者的更新函数，来更新视图。
      set: function (newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        dep.notify();
      },
    });
  },
};

// 消息订阅器Dep，订阅器Dep主要负责收集订阅者，然后在属性变化的时候执行对应订阅者的更新函数
function Dep() {
  this.subs = [];
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },
  // 通知订阅者数据变更
  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update();
    });
  },
};

Dep.target = null;
