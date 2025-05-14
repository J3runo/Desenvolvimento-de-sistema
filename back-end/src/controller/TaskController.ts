
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { taskService } from "../service/TaskService";
import { createTaskScheme, generalTaskSchema } from "../config/shema/task.schema";

export async function taskController(app: FastifyInstance) {
    app.addHook("onRequest", app.authenticate)

    app.post("/task",{schema:createTaskScheme}, async (request, reply) => {
        const body = request.body as { text: string };

        try {
            await taskService.create(body.text);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ erro: error.message })
        }
    })

    app.get("/task",{schema:generalTaskSchema}, async (_, reply) => {
        const list = await taskService.getAll();
        return reply.code(200).send(list);
    })

    app.patch("/task/:id/completed", {schema:generalTaskSchema},async (request, reply) => {
        // CAPTURA INFORMAÇÃO
        const { id } = request.params as { id: string };

        try {
            // RAPASSA INFO RECEBIDA E RECEBE INFORMAÇÃO PROCESSADA
            const task = await taskService.updateCompleted(id);
            // RETORNA UMA RESPONSE PARA QUEM CHAMOU A ROTA
            return reply.code(200).send(task);
        } catch (error: any) {
            return reply.code(404).send({ error: error.message })
        }
    });

    app.delete('/task/:id',{schema:generalTaskSchema}, async (request, reply) => {
        const { id } = request.params as { id: string };
        await taskService.deleteTask(id);
        return reply.code(200).send();
    })

}
