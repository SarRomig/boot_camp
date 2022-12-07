//What does the following code return?
new Set([1,1,2,2,3,4])
//[1,2,3,4]
//[...new Set("referee")].join("") //1 e 1 r 
//ref

//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//(
//     [1,2,3]: true,
//     [1,2,3]: false
// )

//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = arr => {
   if ([...new Set(arr)] == arr) {
    return true;
   }
}
//solution: const hasDuplicate = arr => new Set(arr).size !== arr.length

//hasDuplicate([1,3,2,1]) // true
//hasDuplicate([1,5,-1,4]) // false

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
//I think that should say the keys are letters based on the expected output... - use .has .get and .set

function vowels(char) {
    return "aeiou".includes(char);
}

const vowelCount = (str) => {
    const vowelCountsMap = new Map();
    for (let char of str) {
        let lowerCase = char.toLowerCase();
        if(vowels(lowerCase)) {
            if (vowelCountsMap.has(lowerCase)){
                vowelCountsMap.set(lowerCase, vowelMap.get(lowerCase) +1); //lowerCase value will be numerical so can add to it
            }
            else {
            vowelCountsMap.set(lowerCaseChar, 1);
        }
    }
}
    return vowelCountsMap;
}
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
