const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>')
})
.listen(3355, () => { //서버연결
    console.log('3355번 포트에서 서버 대기 중입니다!');
});

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>')
})
.listen(3356, () => { //서버연결
    console.log('3356번 포트에서 서버 대기 중입니다!');
});