import { Person } from "./person";

export class Experience {
    id?: number;
    position: string;
    company: string;
    logoLoc: string;
    location: string;
    dateStart: Date;
    dateEnd: Date;
    description: string;
    person: Person;

    constructor(position: string, company: string, logoLoc: string, location: string,
        dateStart: Date, dateEnd: Date, description: string, person: Person){
            this.position = position;
            this.company = company;
            this.logoLoc = logoLoc;
            this.location = location;
            this.dateStart = dateStart;
            this.dateEnd = dateEnd;
            this.description = description;
            this.person = person;
    }
}