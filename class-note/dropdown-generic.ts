interface Dropdown<T> {
    value: T,
    selected: boolean,
}

const emails: Dropdown<string>[] = [
    { value: 'naver.com', selected: true},
    { value: 'gmail.com', selected: false},
    { value: 'hanmail.com', selected: false}
]

const numberObProducts: Dropdown<number>[] = [
    { value:1, selected: true},
    { value:2, selected: false},
    { value:3, selected: false},
]

const createDropdownItem = <T>(item: Dropdown<T>): HTMLOptionElement => {
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}

emails.forEach(email => {
    const item = createDropdownItem<string>(email);
    const selectTag = document.querySelector('#email-dropdown');
    selectTag.appendChild(item);
});