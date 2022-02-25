import { Person } from "./person";

export class Education {
    id?: number;
    title: string;
    institution: string;
    degree: string;
    location: string;
    dateStart: Date;
    dateEnd: Date;
    description: string;
    person: Person;

    constructor(title:string, institution:string, degree:string, location:string,
        dateStart:Date, dateEnd:Date, description:string, person:Person){
            this.title = title;
            this.institution = institution;
            this. degree = degree;
            this.location = location;
            this.dateStart = dateStart;
            this.dateEnd = dateEnd;
            this.description = description;
            this.person = person;
    }
}