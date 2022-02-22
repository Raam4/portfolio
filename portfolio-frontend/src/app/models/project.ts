import { Person } from "./person";

export class Project {
    id?:number;
    name:string;
    techs:string;
    picLoc:string;
    dateYear:number;
    link:string;
    description:string;
    person:Person;

    constructor(name:string, techs:string, picLoc:string, dateYear:number, link:string, description:string, person:Person){
        this.name = name;
        this.techs = techs;
        this.picLoc = picLoc;
        this.dateYear = dateYear;
        this.link = link;
        this.description = description;
        this.person = person;
    }
}
