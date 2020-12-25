/*
 * Aotoo-hub
 * 多项目大前端脚手架
 * 作者：天天修改
 * home-url: http://www.agzgz.com
 * github: https: //github.com/webkixi
 */

// 引用react, vue等第三方库
// 编译后会生成vendor.js，并自动加载到页面中
import react from 'react';
import reactdom from 'react-dom';
let context = (()=>{
  if (typeof window !== 'undefined') {
    return window;
  } else {
    return global;
  }
})()
context.React = react;
context.ReactDOM = reactdom