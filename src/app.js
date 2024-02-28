import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
//import livro from "./models/livros.js";


const connection = await dbConnect();

connection.on("error", (erro)=> {

    console.error("Erro ao conectar ao banco de dados: ", erro);
});

connection.once("open", () => {

    console.log("Conexão com banco de dados realizada com sucesso!");
});

const app = express();
routes(app);

//app.use(express.json());

// const livros = [

//     {
//         id:1,
//         titulo: "O senhor dos Aneis"
//     },
//     {
//         id:2,
//         titulo: "O hobbit" 
//     }
// ]

// function buscaLivro(id) {

//     return livros.findIndex(livro => {

//         return livro.id === Number(id);
    
//     })
// }

// app.get("/", (req, res)=> {

//     res.status(200).send("Curso de Express API");   

// });

// app.get("/livros", async(req, res)=> {   

//     const listaLivros = await livro.find({}); 
//     res.status(200).json(listaLivros);
// });

// app.get("/livros/:id", (req, res)=> {

//     const index = buscaLivro(req.params.id);
//     res.status(200).json(livros[index]);
// });

// app.post("/livros", (req, res)=> {

//     livros.push(req.body);
//     res.status(201).send("Livro cadastrado com sucesso!");

// });

// app.put("/livros/:id", (req, res)=>{

//     const index = buscaLivro(req.params.id);
//     livros[index].titulo=req.body.titulo;
//     res.status(200).send(livros);

// });

app.delete("/livros/:id", (req, res)=>{

    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!");
    
});


export default app;

