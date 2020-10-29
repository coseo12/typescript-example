//? 타입 추론 1
interface GetA {
    (a: number) : string
}

let num = 10;

let str = 'abc';


const getA: GetA = (a = 10) => {
    const c = 'abc';
    return a + c;
}

//? 타입 추론 2
interface Dropdown<T> {
    value: T
    title: string
}

const dropdown: Dropdown<string> = {
    value: 'drop',
    title: 'down'
}

//? 타입 추론 3
interface DropdownItem<T> {
    value: T
    title: string
}

interface DetailedDropdown<K> extends DropdownItem<K> {
    tag: K;
    description: string;
}

const detailedItem: DetailedDropdown<string> = {
    tag: 'tag',
    description: 'discription',
    value: 'value',
    title: 'title'
}

//? Best Common Type
const arr = [1, '2', null];