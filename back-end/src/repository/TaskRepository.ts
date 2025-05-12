import { Task } from "../entity/Task";
import { prisma } from "../prisma/client";

export class TaskRepository{
    async save(task:Task){
        await prisma.task.create({
            data:{
                id:task.getId(),
                text:task.getText(),
                completed:task.getCompleted(),
                createdAt:task.getCreatedAt(),
                updateAt:task.getUpdatedAt()
            }
        })
    }

    async findAll(){
        return prisma.task.findMany()
    }


    // async delete(task:Task){
    //     await prisma.task.delete({where:{id:task.getId}})
    // }

}