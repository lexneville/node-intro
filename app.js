const http = require("http");

const server = http.createServer((req,res) => {
    console.log("Hello UA92");

    res.write('<html>');
    res.write('<head><title>My Title</title></head>');
    res.write('<body>Hello there!</body>');
    res.write('</html>');

    res.end();
})

server.listen(3000);



