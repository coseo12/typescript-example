function Person1 (name, age) {
    console.log('created1');
    this.name = name;
    this.age = age;
}

const test1 = new Person1('a', 21)

console.log(test1);

class Person2 {
    constructor(name, age) {
        console.log('created2');
        this.name= name;
        this.age = age;
    }
}

const test2 = new Person2('b', 22);

console.log(test2);