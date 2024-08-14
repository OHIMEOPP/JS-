import http from 'http';

const server = http.createServer((request,response) =>{
    response.setHeader('content-type','text/html;charset=utf-8') //報文頭
    response.end('我是中文!!!');
    //要求方法
    // console.log(request.method);
    //要求得url
    // console.log(request.url);
    //要求http協定版本
    // console.log(request.httpVersion); 
    //要求http標頭
    console.log(request.headers);
});

//監聽端口伺服器
server.listen(9000,() =>{
    console.log('以連接9000');
});

export const x = 'server';