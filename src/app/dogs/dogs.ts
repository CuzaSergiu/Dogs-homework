export class Dogs {

    name: string;
    breed: string;
    age: number;

    constructor(name: string, breed: string, age: number) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    toString(): string {
        return "Dog : " + this.name 
        + " is " 
        + this.breed 
        + " and is " 
        + this.age 
        + " years old";

    }

}