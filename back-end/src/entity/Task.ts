import {randomUUID} from 'crypto'

export class Task {
    private id:string;
    private text:string;
    private completed:boolean;
    private creatAt:Date;
    private updateAt:Date;

    constructor(text:string){
        this.id = randomUUID(),
        this.text= text,
        this.completed = false,
        this.creatAt = new Date(),
        this.updateAt = new Date()
    }

        //METODOS//
    public getId(){
        return this.id
    }
    public gettext(){
        return this.text
    }
    public getCompleted(){
        return this.completed
    }
    public getCreatAt(){
        return this.creatAt
    }
    public getUpdateAt(){
        return this.updateAt
    }
}