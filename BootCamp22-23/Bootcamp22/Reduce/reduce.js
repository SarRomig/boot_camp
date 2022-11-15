/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    return arr.reduce(function(newArr,nextVal){
        newArr.push(nextVal[key]);
        return newArr;
    }, []); //initializes acc
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    let vowels = "aeiou";
    return str.split("").reduce(function(obj, next) { //this is all in the return statement of the original function
        //make str lower case
        let nextLowerCase = next.toLowerCase();
        if (vowels.indexOf(nextLowerCase) !== -1) {
            //check if it already exists in obj
            if(obj[nextLowerCase]) {
                obj[nextLowerCase]++;
            }
            else {
                obj[nextLowerCase] = 1; //initialize it in the obj
            }
        }
        return obj;
    }, {})
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function (arrOfObj, nextObj, i) {
        arrOfObj[i][key] = value;
        return arrOfObj;
    }, arr); //initialize to the original array because you're just adding on to it
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    return arr.reduce(function (bigArr, nextVal) {
        //if callback on the nextVal is true
        if(callback(nextVal)){
            bigArr[0].push(nextVal); //add to the first array of the big array
        }
        //if callback returns false:
        else {
            bigArr[1].push(nextVal); //add to the second array of the big array
        }
        return bigArr;
    }, [[],[]]); //answer the initialization question first, what are you expecting at the end? An array with 2 arrays inside of it then you're adding to that based on the callback function(which you don't need to have, it'll be passed in)
}
