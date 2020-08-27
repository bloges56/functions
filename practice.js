//Given a person's age, returns their age in dog years
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7;

    return ageInDogYears;
}

const dogAge = calculateAgeInDogYears(45);
// console.log(dogAge);



//Given a breed, returns a string correspoing to the input
const favoriteBreed = (breed) => {
    if(breed === "meow"){
        return "I like cats";
    }

    return `my favorite dog breed is ${breed}`;
}

const myFavorite = favoriteBreed("shnauzer");

// console.log("When it comes to pets,", myFavorite);



//returns the sum of 3 numbers
const add = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

var result = add(17,4,11);

// console.log(result);



//Logs a message that includes the given direction and speed of a car
//If speed is over 75, log 'SLOW DOWN!'
const go = (direction, speed) => {
    var message = `The car is moving ${direction} at ${speed} mph.`
    if(speed > 75){
        message += " SLOW DOWN!";
    }

    console.log(message);
}

// go("forward", 20);
// go("forward", 85);



var testNums = [10, 5, 438, 2373, 576, 895];

//returns "even" if argument is even and "odd" if argument is odd
const evenOrOdd = (num) => {
    if(num%2 === 0){
        return 'Even';
    }
    return 'Odd';
}

// for(var test of testNums){
//     console.log(evenOrOdd(test));
// }

// console.log(evenOrOdd(0));



const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

//filters out words that start with a k from an array of strings
const filterOutK = (strings) => {
    var filteredArray = [];
    for(var word of strings){
        if(!(word.startsWith('k'))){
            filteredArray.push(word);
        }
    }
    return filteredArray;
}

const createSentence = (strings) => {
    return strings.join(' ');
}

var noKArray = filterOutK(words);
var sentence = createSentence(noKArray);
// console.log(sentence);



//You Can Tune a Piano, But You Can't...
const castForTuna = () => {
    var raffle = Math.floor(Math.random() * 3);
    debugger;
    if(raffle === 0){
        return true;
    }
    
    return false;
    
}

// for(var i = 0; i<100; i++){
//     var tuna = castForTuna();
//     if(tuna){
//         console.log("Sven hooked a tuna!  :)");
//     }
//     else{
//         console.log("Sven came up empty-handed.  :(");
//     }
// }



//Fast Food
const orderMeal = (sandwich, dessert, drink, side) => {
    return {
        "sandwich": sandwich,
        "side": side,
        "drink": drink,
        "dessert": dessert
    };
}

const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges");
// console.log(takeOutBag);



//Same Chores, Different Days

//Defining the chores

const groceries = person => `${person.firstName} ${person.lastName} went to the grocery store`

const dishes = person => `${person.firstName} ${person.lastName} washed the dishes`

const laundry = person => `${person.firstName} ${person.lastName} did laundry`

const lawn = person => `${person.firstName} ${person.lastName} mowed the lawn`

const room = person => `${person.firstName} ${person.lastName} cleaned their room`

const car = person => `${person.firstName} ${person.lastName} washed the car`



