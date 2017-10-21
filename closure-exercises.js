// 1) Make a counter function that returns a function that returns a successive number each time it is called.
// function counter () {
//     var count = 0;
//     var counthis = function () {
//         count++;
//         return count;
//     }
//     return counthis;
// }
// var darealcount = counter();
// console.log(darealcount());
// console.log(darealcount());

// 2) Allow the caller of counter to initialize the count to the first argument that's passed in
// function counterr (num) {
//     var counthis = function () {
//         num++;
//         return num;
//     }
//     return counthis;
// }

// var ohwut = counterr(6);
// console.log(ohwut());
// console.log(ohwut());

// 3) Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, respectively. Note: now the counter needs to return an object rather than a function.
//not finished. incorrect.
function counterrr (num) {
    this.num = num;
    counterrr.prototype.increment = function () {
        this.num++;
        return this.num;
    }
    counterrr.prototype.decrement = function () {
        this.num--;
        return this.num;
    }
}
var queso = counterrr(5);

console.log(queso.decrement());
console.log(queso.increment());
console.log(queso.increment());
console.log(queso.decrement());
console.log(queso.increment());
