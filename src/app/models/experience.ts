import { Person } from "./person";

export class Experience {
    id?: number;
    position: string;
    company: string;
    imgUrl: string;
    location: string;
    dateStart: Date;
    dateEnd: Date;
    description: string;
    person: Person;

    constructor(position: string, company: string, imgUrl: string, location: string,
        dateStart: Date, dateEnd: Date, description: string, person: Person){
            this.position = position;
            this.company = company;
            this.imgUrl = imgUrl;
            this.location = location;
            this.dateStart = dateStart;
            this.dateEnd = dateEnd;
            this.description = description;
            this.person = person;
    }
}