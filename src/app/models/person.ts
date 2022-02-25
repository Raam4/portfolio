export class Person {
    id?: number;
    firstName: string;
    lastName: string;
    title: string;
    picLoc: string;
    location: string;
    about: string;

    constructor(firstName: string, lastName: string, title: string, picLoc: string, location: string, about: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.picLoc = picLoc;
        this.location = location;
        this.about = about;
    }
}