import { Person } from "./person";

export class Skill {
    id?:number;
    name:string;
    type:string;
    icon:string;
    person:Person;

    constructor(name:string, type:string, icon:string, person:Person){
        this.name = name;
        this.type = type;
        this.icon = icon;
        this.person = person;
    }
}
