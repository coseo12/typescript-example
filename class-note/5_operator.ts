function logMessage(msg: string | number) {
    console.log(msg);
}

logMessage('hello');
logMessage(1000);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person): void {
    someone.name;
}

function askSomeone1(someone: Developer & Person): void {
    someone.name;
    someone.age;
    someone.skill;
}

askSomeone({name: 'a', age: 2});
askSomeone({name: 'b', skill:'TS'});

askSomeone1({name: 'a', age: 2, skill: 'TS'});