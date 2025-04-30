import { FastifyInstance } from "fastify";
import { taskService } from "../services/TaskService";

export async function taskController(app: FastifyInstance) {
    //ROTA PARA ADICIONAR COISA NA LISTA
app.post("/task",(request, reply)=>{
    //PEGAR INFORMAÇÕES DO FRONT OU DE QUEM CHAMAR O ENDPOINT (TEXT)
    const body = request.body as {text:string};
try{
    taskService.create(body.text)
    return reply.code(201).send()
}catch(error:any){
    return reply.code(409).send({erro: error.message})
}

    taskService.create(body.text)
    //RETORNA INFORMAÇÃO
    return reply.code(201).send()
})
//ROTA PARA BUSCAR TODA LISTA
app.get("/tasks",(_, reply)=>{
    const list = taskService.getAll()
    return reply.code(200).send(list)
})

}