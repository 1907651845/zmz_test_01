import React from "react";

function App() {

// 变量与类型
// let 定义变量法

let a = "我是type script的a变量"
let b =10
console.log(a)

// const定义变量法
// const const1 =100;
// const1=200;

// 数组
// let arr:string[] =[]
// arr.push("..000");
// arr.push("..111");
// arr.push("..22");
// arr.push("adfaf222");
// arr = arr.slice(1,3);
// console.log("..arr",arr)

// 语句控制
for(let i = 0;i<10;i++){
  //尝试把a不断加多一个字符进行改变
  a+='+'
}
console.log(">>>",a)

// 函数
const sum = (a:number,b:number)=>{
  return a+b
}
// 执行
let t1 = sum(100,200);
console.log("t1",t1)
  // const handleClick = () => {
  //   alert("Hello, World!");
  // };

  // console.log("hello, world。")

  // return (
  //   <div className="p-4">
  //     <h1 className="text-4xl font-bold">
  //       Hi, 我们开始学习 DaisyUI + Vite + React 啦!
  //     </h1>
  //     <button className="btn btn-primary mt-4" onClick={handleClick}>
  //       Click me!
  //     </button>
  //   </div>
  // );
}

export default App;
