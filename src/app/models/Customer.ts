export class Customer {
    name: string;
    adress: string;
    age: number;
    logCustomerInfos(): void {
        console.log(this.name + " " + this.age + " " + this.adress);
    }

    constructor(name: string, adress: string, age: number) {
        this.name = name;
        this.adress = adress;
        this.age = age;
    }
}


