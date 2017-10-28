var mom = {
    firstName: 'Alice',
    lastName: 'Wong',
    eyeColor: 'brown',
    hairColor: 'black'
};
var daughter = {
    firstName: 'Ilene',
    hairColor: 'brown'
};

//////////////////////////////////////// #1 ////////////////////////////////////////
//Write code to make daughter inherit properties from mom. What are the daugther's properties and their values? Print them out.

//////////////////////////////////////// #2 ////////////////////////////////////////
// Add a method called showInfo to mom by attaching a function to it as a property. 
// Calling this method will print out all four properties. Call this method on both mom and daugther.
class Mom {
    constructor (name) {
        this.name = name;
        this.lastName = 'Wong';
        this.eyeColor = 'Brown';
        this.hairColor = 'Black';
    }
    showInfo () {
        console.log(this.name);
        console.log(this.lastName);
        console.log(this.eyeColor);
        console.log(this.hairColor);
    }
};
class Daughter extends Mom {
    constructor(name) {
        super(name);
        this.hairColor = "Brown";
    }
    
};
var newmom = new Mom ('Alice');
var daughter = new Daughter ('Ilene');
newmom.showInfo();
console.log(' ');
daughter.showInfo();


//////////////////////////////////////// #3 ////////////////////////////////////////
// Rewrite this function below as a class //
// function Person(name) {
//     this.name = name;
//     this.friends = [];
// }

// Person.prototype.addFriend = function (friend) {
//     this.friends.push(friend);
// };

// Person.prototype.createGreeting = function (other) {
//     return 'Yo ' + other.name + '! from ' + this.name + '.';
// };

// Person.prototype.greet = function (other) {
//     console.log(this.createGreeting(other));
// };

class Person {
    constructor (name) {
        this.name = name;
        this.friends = [];
    }
    addFriend (friend) {
        this.friends.push(friend);
    }
    createGreeting (other) {
        return 'Yo ' + other + '! from ' + this.name + '.';
    }
    greet (other) {
        console.log(this.createGreeting(other));
    }
    lazygreet (this, other) {
        setTimeout (console.log(this.createGreeting(other)), 2000);
    };
    // setTimeout(lazygreet (other) {
    //     console.log(this.createGreeting(other));
    // }, 2000);
}
var joe = new Person('Joe');
joe.addFriend('Jimmy');
console.log(joe.createGreeting('Joe'));
joe.greet('pepe');
joe.lazygreet('sam');


//////////////////////////////////////// #4 ////////////////////////////////////////