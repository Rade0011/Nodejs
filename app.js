
function calc(operation, a, b) {
    if (operation === 'add') {
        return a + b;
     } else if (operation === 'multi') {
       return a * b;
     } else if (operation === 'subtract') {
       if (a > b) 
       return a - b }{
       if (a < b)
       return b - a 
     }
    }
console.log(calc('add', 8, 16));
console.log(calc('multi', 5, 20));
console.log(calc('subtract', 16, 24));

