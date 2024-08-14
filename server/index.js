// server/index.js
import express from "express";
import cors from 'cors'; // 引入 CORS
import fs from 'fs';//載入fil3 system
import { Console } from "console";
import { x } from './http.js';
import os from 'os';//載入作業系統(os)模組

const app = express();
const port = 5000;
//匯入其他檔案
// console.log(x);

//檔案寫入
// fs.writeFile('./座右銘.txt','我愛空媽',err => {
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log('成功');
// })
let mytxt = '';
//讀取檔案
// fs.readFile('./告白信.txt',(err, tegami) =>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(tegami.toString());
//   mytxt = tegami.toString();
//   return;
// });

//讀取檔案 2
const rs = fs.createReadStream('./告白信.txt');
rs.on('data',chunk =>{
  mytxt = chunk.toString();
  // console.log(mytxt);
  console.log('讀取完成');
  return;
})

//複製檔案
// const rs = fs.createReadStream('./座右銘2.txt');
// const ws = fs.createWriteStream('./座右銘4.txt');

// rs.on('data',chunk =>{
//   ws.write(chunk);
// })

//檔案改名
// fs.rename('./座右銘.txt','./告白信.txt',err => {
//   if(err){
//     console.log(err);
//   }
//   console.log('成功');
// });

//檔案刪除 unlink or rm
// fs.rm('./座右銘3.txt',err => {
//   if(err){
//     console.log('失敗');
//     return;
//   }
//   console.log('刪除成功');
//   return;
// });
//0282280188

//檔案狀態
// fs.stat('./告白信.txt',(err,data) =>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(data.size);
//   console.log('檔案狀態查詢完成');
// })

//讀取文件夾(同步)
// const file = fs.readdirSync('../server');
// file.forEach((e) =>{
//   console.log(e);  
// })

//os
console.log(os.arch);

const array = [{name:'jack', bir:'20', id:1},{name:'tom', bir:'32', id:2}];

app.use(cors());
app.get('', (req, res) => {
  res.json({message: mytxt});
});

app.listen(port, () => {
  // console.log(`Server is running on http://localhost:${port}`);
});