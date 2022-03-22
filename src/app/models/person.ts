export class Person {
    id?: number;
    firstName: string;
    lastName: string;
    title: string;
    imgUrl: string;
    location: string;
    about: string;

    constructor(firstName: string, lastName: string, title: string, imgUrl: string, location: string, about: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.imgUrl = imgUrl;
        this.location = location;
        this.about = about;
    }
}