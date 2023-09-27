"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/Login.ts
  var { regClass, property } = Laya;
  var Login = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.text = "";
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      this.btn.on(Laya.Event.CLICK, this, () => {
        console.log(`\u5F53\u524D\u8F93\u5165:${this.txtInput.text}  \u9009\u62E9:${this.comboBox.selectedLabel}`);
      });
      this.comboBox.labels = "Debug,Release";
      this.comboBox.selectedIndex = 0;
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __decorateClass([
    property(String)
  ], Login.prototype, "text", 2);
  __decorateClass([
    property({ type: Laya.TextInput })
  ], Login.prototype, "txtInput", 2);
  __decorateClass([
    property({ type: Laya.Button })
  ], Login.prototype, "btn", 2);
  __decorateClass([
    property({ type: Laya.ComboBox })
  ], Login.prototype, "comboBox", 2);
  Login = __decorateClass([
    regClass("mHUgF18XRQaT8ads-f2jEw")
  ], Login);

  // src/Main.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Main = class extends Laya.Script {
    // @property({type : Laya.Label})
    // public lbl : Laya.Label;
    onStart() {
      console.log("Game start");
      this.progressBar.value = 0.01;
      this.loadText.text = "\u52A0\u8F7D\u4E2D...";
      Laya.timer.loop(100, this, this.changeProgress);
    }
    changeProgress() {
      this.progressBar.value += 0.05;
      var progress = this.progressBar.value * 100;
      this.loadText.text = `\u52A0\u8F7D\u4E2D ${progress.toFixed(0)}%`;
      if (this.progressBar.value == 1) {
        this.loadText.text = "\u52A0\u8F7D\u5B8C";
        Laya.timer.clear(this, this.changeProgress);
        Laya.Scene.open("Scenes/Login.ls");
      }
    }
  };
  __decorateClass([
    property2({ type: Laya.ProgressBar })
  ], Main.prototype, "progressBar", 2);
  __decorateClass([
    property2({ type: Laya.Text })
  ], Main.prototype, "loadText", 2);
  Main = __decorateClass([
    regClass2("e60XQm7tTY2BwFAdxb8D1g")
  ], Main);
})();
