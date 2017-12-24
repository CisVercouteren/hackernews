export default class User {
    constructor(id, firstName, secondName, age) {
        (this.id = id),
            (this.firstName = firstName),
            (this.secondName = secondName),
            (this.age = age);
    }

    getUser = () => `${this.id} - ${this.firstName} - ${this.secondName}`;
}
