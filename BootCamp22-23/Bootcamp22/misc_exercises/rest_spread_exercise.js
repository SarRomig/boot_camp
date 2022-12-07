// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
  /* Write an ES2015 Version */
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);



const findMin = (...args) => Math.min(...args); //spread for arguments passed in and rest for finding the min of all the args

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}); //implicit return of the copies as one obj

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}



const doubleAndReturnArgs = (arr, ...vals) => [...arr, ...vals.map(num => num*2)];

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

//remove a random element in the items array and return a new array without that item. 

const removeRandom = (items) => {
    let i = Math.floor(Math.random() * items.length);
  return [...items.slice(0, i), ...items.slice(i + 1)];
}


//Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

// Return a new object with all the keys and values from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

// Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key] //we never saw delete before this? Had to google
    return newObj;
}


// Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2};
    return newObj;
}


// Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}
