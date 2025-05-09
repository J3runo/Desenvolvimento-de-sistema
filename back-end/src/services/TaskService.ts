import { Task } from "../entity/Task";
import { Task as TaskPrisma } from "@prisma/client";
import { prisma } from "../prisma/client";


class TaskService {

    private taskList: Task[] = [];

    public async create(text: string):Promise <void> {
      const task:TaskPrisma = {
        id: crypto.randomUUID(),
        text: text,
        completed: false,
        createAt: new Date(),
        updatedAt:new Date()
      }

      await prisma.task.create({data:task})
    }

    public async getAll():Promise<TaskPrisma[]> {
        return await prisma.task.findMany({orderBy:{createAt:"asc"}});
    }

    public getById(id: string): Task | null {
        const task = this.taskList.find(task => task.getId() === id);
        return task ? task : null;
    }

    public async updateCompleted(id: string){
       const task = await prisma.task.findUnique({ where: { id }})
       if(task == null){
        throw new Error("Tarefa nao foi encontrada")
       }

       const taskUpdate = {
        completed:!task.completed,
        updatedAt: new Date()
       }

       return await prisma.task.update({
        where:{id},
        data:taskUpdate
       })

    }

    public updateText(id: string, text: string){
        const task = this.getById(id);
        if(task === null){
            throw new Error("Tarefa não foi encontrada.")
        }

        task.setText(text);
        return task;
    }

    public async deleteTask(id:string){
        return await prisma.task.delete({where:{id}})    }


}

export const taskService = new TaskService();