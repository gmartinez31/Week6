///////////////////////////////// JavaScript Objects ////////////////////////////////////
function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function (other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

// 1) Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948')

// 2) Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456')

// 3)Have sonny greet jordan using the greet method.
sonny.greet(jordan)

// 4)Have jordan greet sonny using the greet method.
jordan.greet(sonny)

// 5)Write a statement to print the contact info (email and phone) of Sonny.
console.log(`This is Sonny's email and phone number: ${sonny.email} ${sonny.phone}`)

// 6)Write another statement to print the contact info of Jordan.
console.log(`Jordan's information: ${jordan.name} ${jordan.email} ${jordan.phone}`)


// ///////////////////////////////// Card Constructor ////////////////////////////////////
class Card {
    constructor (value, name, suit) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    }

    getImgUrl () {
        console.log(`images/${this.point}_of_${this.suit}.png`);
    }
}
var ex_card = new Card(5, 'diamonds');
console.log(ex_card);
console.log(ex_card.point);
console.log(ex_card.suit);


///////////////////////////////// getImageUrl() ////////////////////////////////////

// Add a getImageUrl method to card objects by adding it as a property to Card.prototype. 
// The method should return the URL path to the png image file for the card.
ex_card.getImgUrl();


///////////////////////////////// Hand Constructor ////////////////////////////////////

// A hand is simply represented as a collection of cards, but it would also be convenient for 
// a hand to be able to return it's point value.
class Hand {
    constructor() {
        this.hand = [];
    }
    addCard (card) {
        this.hand.push(card);
    }
    getPoints () {
        let total = 0;
        for (var index in this.hand) {
            total+= this.hand[index].point;
        }
        return total;
    }
}

var myHand = new Hand();
myHand.addCard (new Card(5, 'diamonds'));
myHand.addCard (new Card(12, 'spades'));
console.log(myHand.getPoints());


///////////////////////////////// Deck Constructor ////////////////////////////////////

//  not complete //

class Deck {
    constructor() {
        this.deck = function () {
            names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
            suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
            var cards = [];
            for (var s = 0; s < suits.length; s++) {
                for (var n = 0; n < names.length; n++) {
                    cards.push(new Card(n + 1, this.names[n], this.suits[s]));
                }
            }
            return cards;
        }
    }
    draw (card) {
        this.deck.pop()
    }
    deck_shuffle () {
        this.deck = [];
        let counter = this.deck.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = this.deck[counter];
            this.deck[counter] = this.deck[index];
            this.deck[index] = temp;
        }
        return this.deck;
    }
    cardsLeft () {
        return this.deck.length;
    }
}

var myDeck = new Deck();
console.log(myDeck.deck_shuffle());
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.cardsLeft());
