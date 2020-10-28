function logText<T>(msg: T): T {
    console.log(msg);
    return msg
}

const a = logText<string>('log');
const b = logText<number>(10);


//? 제네릭 타입 제한1
function logTextLength<T>(text: T[]) : T[] {
    return text;
}

logTextLength(['hi']);

//? 제네릭 타입 제한2
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T) :T {
    return text;
}

//? 제네릭 타입 제한3
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(option: T):T {
    return option
}
getShoppingItemOption("name");
getShoppingItemOption("price");
getShoppingItemOption("stock");
