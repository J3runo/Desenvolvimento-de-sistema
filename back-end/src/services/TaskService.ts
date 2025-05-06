import { error } from "console"
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
    public getAll(): Task[] {
        return this.taskList
    }


    public getById(id:string):Task | null{
        const task = this.taskList.find(task => task.getId() === id)
        return task ? task : null
    }

    public updateCompleted(id:string,completed:boolean){
        const task = this.getById(id) 
        if(task === null){
            throw new Error("tarefa nao foi encontrada.")
        }
        task.setCompleted(completed)
        return task
    }

    public updateText(id:string, text:string){
        const task = this.getById(id)
        if(task === null){
            throw new Error("tarefa nao foi encontrada.")
        }
        task.setText(text)
        return task

    }
}

export const taskService = new TaskService()