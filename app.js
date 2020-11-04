const http = require("http");
const port = 8080;
http.createServer((req, ans) => {
    ans.writeHead(200, {"Content-Type": "application/json"});
    let salida ={
        name: "John",
        lastname: "Loize",
        url: req.url
    }
    ans.write(JSON.stringify(salida));
    ans.end();
})
.listen(port);

console.log(`Escuchando el puerto ${port}`);