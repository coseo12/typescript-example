enum Shoes {
    Nike,
    Adidas
}

const myShoes = Shoes.Nike;

console.log(myShoes); //! 0

enum Shoes2 {
    Nike = 'nike',
    Adidas = 'adidas'
}

const myShoes2 = Shoes2.Nike;

console.log(myShoes2); //! nike

//* Example
enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('ok');
    }
    if(answer === Answer.No) {
        console.log('none');       
    }
}

askQuestion(Answer.Yes);
askQuestion(Answer.No);