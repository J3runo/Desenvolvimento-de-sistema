import fastify from "fastify"; 
import { taskController } from "./controller/TaskController";
import cors from "@fastify/cors"

const app = fastify()

app.register(cors,{
    origin:["http://localhost:3000"],
    methods:["GET","POST","PATCH","DELETE"]
})

app.register(taskController)

const port = 3333
app.listen({port:port}).then(()=>{
    console.log("servidor back-end rodando na porta 3333")
})

