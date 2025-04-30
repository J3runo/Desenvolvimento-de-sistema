import { Task } from "../entity/Task"

class TaskService {

    private taskList: Task[] = []

    create(text: string,) {
      
        //VERIFICAR SE JA EXISTE UMA TAREFA COM O TEXT INFORMADO
        const textAlreadExist = this.taskList.find(task => task.gettext() === text)
        if (textAlreadExist) {
            throw new Error("JA EXISTE UMA TAREFA COM ESSE TEXTO.")
        }

        //CRIAR O OBJETO DO TIPO TASK
        const newTask = new Task(text)
        this.taskList.push(newTask)
    }
        //ADICIONAR NA LISTA OU BANCO DE DADOS
        public getAll():Task[]{
            return this.taskList
        }

    }

export const taskService = new TaskService()