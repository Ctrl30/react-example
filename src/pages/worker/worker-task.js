/* eslint-disable no-restricted-globals */
const workerTask = function () {
    // 监听主线程传过来的信息
    self.onmessage = e => {
     console.log('主线程传来的信息：', e.data);
   };
   
   // 发送信息给主线程
   self.postMessage('来自worker线程');
   
 }
 let code = workerTask.toString();
 code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
// const blob = new Blob([code], { type: 'application/javascript' });

// export default URL.createObjectURL(blob);
export default code;