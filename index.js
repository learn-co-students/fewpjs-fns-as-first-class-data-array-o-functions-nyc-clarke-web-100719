const arr  = ["Byron", "poodle"]

function wakeDog(dogName="Byron", dogBreed="poodle") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }


function leashDog(dogName="Byron", dogBreed="poodle") {
    return `Leash ${dogName} the ${dogBreed}`;
}
  
function walkToPark(dogName="Byron", dogBreed="poodle") {
    return `Walk to the park with ${dogName} the ${dogBreed}`;
}

function throwFrisbee(a="Byron", b="poodle") {
    return `Throw the frisbee for ${a} the ${b}`;
}

function walkHome(a,b) {
   return `Walk home with ${a} the ${b}`
}

function unleashDog(a,b) {
    return `Unleash ${a} the ${b}`;
}

let routine = [wakeDog,leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let arr = [];
     for (const func of routine) {
         arr.push(func(dogName, dogBreed));
    };
    return arr;
}