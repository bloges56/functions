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



