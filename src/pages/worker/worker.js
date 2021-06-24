// import workerTask = require("./worker-task");

const workerTask = require("./worker-task").default;
class WebWorker {
  constructor(data, type = "url") {
    this.worker = null;
    this.workerInit(data, type);
  }
  workerInit = (data, type) => {
    if (type === "url") {
      // 默认是以url脚本形式的worker线程
      // 此时的data应该是一个url链接
      this.worker = new Worker(data);
    } else {
      // 以字符串形式创建worker线程，把代码字符串，转成二进制对象，生成 URL，加载URL
      const blob = new Blob([data]);
      const url = window.URL.createObjectURL(blob);
      this.worker = new Worker(url); // 加载
    }
  };
  postMessage(data) {
    return this.worker.postMessage(data);
  }
  onmessage(fn) {
    this.worker.onmessage = msg => {
      return fn(msg.data);
    };
  }
  // 主线程关闭worker线程
  closeWorker() {
    return this.worker.terminate();
  }
  /**
   * @description: 主线程监听worker线程的错误信息
   * @param {Function} fn 错误信息回调
   */
  errMsg(fn) {
    this.worker.onerror = e => {
      return fn(e);
    };
  }
}
const worker = new WebWorker(workerTask, "script");
worker.onmessage(data => {
  console.log("父进程接收的数据：", data);
});
worker.postMessage("主进程传给worker线程");
worker.errMsg(msg => {
  console.log("worker线程报错：", msg);
});