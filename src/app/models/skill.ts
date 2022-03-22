import { Person } from "./person";

export class Skill {
    id?:number;
    name:string;
    type:string;
    imgUrl:string;
    person:Person;

    constructor(name:string, type:string, imgUrl:string, person:Person){
        this.name = name;
        this.type = type;
        this.imgUrl = imgUrl;
        this.person = person;
    }
}
