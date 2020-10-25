//? TS 함수
function sum(a: number, b: number): number {
    return a + b;
}

sum(10, 20);

//? TS OPTIONAL PARAMS
function log(a: string, b?: string): void {
    console.log(a, b);
}

log('hello');
log('hello', 'world');