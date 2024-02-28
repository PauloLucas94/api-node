//import http from 'http';
import "dotenv/config";
import app from "./src/app.js";



const PORT=3000;

// const rotas = {

//     "/": "Curso de Express API",
//     "/livros": "Listagem de livros",
//     "/autores": "Listagem de autores"
// };

// const server = http.createServer((req, res) => {

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(rotas[req.url]);
// });

app.listen(PORT, ()=> {

    console.log("Servidor rodando na porta 3000!");
});