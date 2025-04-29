import fastify from "fastify";

const app = fastify()

app.get("/hello",()=>{console.log("entrou no endpoint hello");return "ola mundo"})
app.post("/hello",()=>{console.log("metodo post");return "ola post"})

app.listen({port:3333}).then(()=>console.log("servidor back-end rodando na porta 3333"))

