export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age:number){
        this.firstName = firstName
        this.lastName = lastName
    }

    public greeter(){
        console.log(`Hello  ${this.firstName} ${this.lastName}`)
    }
    public GetAge(){
        console.log(`Age:  ${this.age} `)
    }
}

let customer = new Customer("Ali", "Farahmand", 20);
customer.greeter();

