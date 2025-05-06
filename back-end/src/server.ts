import fastify from "fastify"; 
import { taskController } from "./controller/TaskController";

const app = fastify()

app.register(taskController)

const port = 3333
app.listen({port:port}).then(()=>{
    console.log("servidor back-end rodando na porta 3333")
})

