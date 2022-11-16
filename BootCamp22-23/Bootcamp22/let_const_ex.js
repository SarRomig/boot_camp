//var PI = 3.14;
PI = 42; // stop me from doing this!
//change to:
const PI = 3.14;
//PI = 42; -- Error message will fire

//What is the difference between var and let?
// Unlike var, you can't re-decalre using 'let'. You can re-assign with both. Let is block-scoped while var is function-scoped

// What is the difference between var and const?
// Const won't allow reassigning OR redeclaring. It is block-scoped while var is function-scoped. 

// What is the difference between let and const?
// Unlike const, you CAN reassign with let.

// What is hoisting?
//Variables are essentially read by JS at the top of their scope, so it knows they're there but with let and const, it won't allow any accessing of the variables. With const, you can't declare it without initializing it. With var, you can access the variable but it'll be undefined until it is initialized later because it is on the window object.
