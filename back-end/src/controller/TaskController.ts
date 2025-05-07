import { FastifyInstance } from "fastify";
import { taskService } from "../services/TaskService";



export async function taskController(app: FastifyInstance) {
    //ROTA PARA ADICIONAR COISA NA LISTA
    app.post("/task", (request, reply) => {
        //PEGAR INFORMAÇÕES DO FRONT OU DE QUEM CHAMAR O ENDPOINT (TEXT)
        const body = request.body as { text: string };
        try {
            taskService.create(body.text)
            return reply.code(201).send()
        } catch (error: any) {
            return reply.code(409).send({ erro: error.message })
        }

        taskService.create(body.text)
        //RETORNA INFORMAÇÃO
        return reply.code(201).send()
    })
    //ROTA PARA BUSCAR TODA LISTA
    app.get("/tasks", (_, reply) => {
        const list = taskService.getAll()
        return reply.code(200).send(list)
    })

    app.get("/task/:id",(request, reply)=>{
        const {id} = request.params as {id:string};
        
        const task = taskService.getById(id);
        return task
    })

    app.patch("/task/:id/completed",(request, reply)=>{
        const {id} = request.params as {id:string};
        try {
            const task = taskService.updateCompleted(id)
            return reply.code(200).send(task)
        } catch (error: any) {
            return reply.code(404).send({ erro: error.message })
        }

    })

    app.patch("/task/:id/text",(request, reply)=>{
        const { id } = request.params as {id:string}
        const {text} = request.body as {text:string}

        try {
            const task = taskService.updateText(id, text)
            return reply.code(200).send(task)
        } catch (error: any) {
            return reply.code(404).send({ erro: error.message })
        }
     })

    app.delete("/task/:id",(request, reply)=>{
        const {id} = request.params as {id:string}
        taskService.delete(id)
        return reply.code(200).send()
     })
}