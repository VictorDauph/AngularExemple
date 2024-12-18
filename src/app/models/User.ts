import { Roles } from "../enums/Roles";

export class User {
    name: string;
    age: number;
    role: Roles = Roles.User;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
}