//? TS 인터페이스
interface User {
    name: string,
    age: number,
}

//? TS 인터페이스 활용
const a: User = {
    name: 'a',
    age: 22
}

//? TS 함수에 활용
function getUser(user: User): void {
    console.log(user);
}
getUser(a);

//? TS 함수 인터페이스
interface SumFunc {
    (a: number, b: number): number;
}

const sum: SumFunc = (a:number, b:number):number => a + b;

//? TS 인터페이스 Index
interface StringArray {
    [index: number]: string;
}

const arrStr: StringArray = ['a', 'b', 'c'];

//? TS 인터페이스 Dictionary
interface StringRegexDictionary {
    [key: string]: RegExp
}

const obj: StringRegexDictionary = {
    sth: /abc/,
    cssFile: /\.css&/,
    jsFile: /\.js$/
}

//? TS 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

const person: Developer = {
    name: 'aaa',
    age: 22,
    language: 'TS'
}