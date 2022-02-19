export class NewUser {
    email: string;
    username: string;
    password: string;
    authorities: string[];

    constructor(email: string, username: string, password: string, authorities: string[]){
        this.email = email;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }
}
