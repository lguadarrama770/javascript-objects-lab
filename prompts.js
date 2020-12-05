//Prompt 1: Print the object above to the console.
    const car = {
        make : "ford",
        model : "mustang",
        color : "black",
        type : "sedan",
        tires : "firestone",
        mode : "sport",
        gasoline : "super"
    }
    console.log(car);
//Prompt 2: Write a function that takes an object as an argument and prints it to the console.
    function takeObject() {
        const car = {
            make : "ford",
            model : "mustang",
            color : "black",
            type : "sedan",
            tires : "firestone",
            mode : "sport",
            gasoline : "super"
        }
        console.log(car); 
    }
    takeObject();
//Prompt 3: Delete the gasoline property from the object. Also print the object before or after deleting the property.
    delete car.gasoline;
    console.log(car);

//Prompt 4: Write a function that returns the object keys as an array.
function objectKeyToArray() {
       let keysToArray = Object.keys(car);
       return keysToArray;
}
console.log(objectKeyToArray());

//Prompt 5: Write a function that returns the object's values as an array.
function objectValueToArray() {
       let valueToArray = Object.values(car);
       return valueToArray
}
console.log(objectValueToArray());

/*Prompt 6: Add two more properties to the object tints: 33% and carplay: true. 
Print to the console to make sure properties were added.*/
car.tints = '33%';
car.carplay = true;

/*
Prompt 7: Add a method called startEngine with the following:
    When method is called, it prints "VROOM VROOM" to the console.
        Contains a variable engineOn with a boolean value set to true.
Prompt 8: Add a method called turnOffEngine with the following:
   When method is called, it prints "car turned off" to the console.
        Contains a variable engineOn with a boolean value set to false.
*/
const car = {
    make : "ford",
    model : "mustang",
    color : "black",
    type : "sedan",
    tires : "firestone",
    mode : "sport",
    gasoline : "super",
    startEngine: function() {
        let engineOn = true;
        return console.log('VROOM VROOM');
        },
    turnOffEngine: function() {
        let engineOn = false;
        return console.log('car turned off');
    }
   }

/*Prompt 9: Write a loop that iterates through the above object's properties. 
    Hint: You will need to turn the object into an array using 1 of 3 object methods in order to loop through it.
*/
for(let i = 0; i <= car.length; i++){
    let funcEngines = {
        ...startEngine(),
        ...turnOffEngine()
    };
    console.log(car);
}

/*Prompt 10: Using the directions below, create an object:

    Choose one of the following: duck, eagle, or penguin.
        Add an array to the object called favoriteFood, listing the 3-5 favorite foods of the bird.
        Provide the object with 4 key:value pairs, one of which being a boolean value named canFly.
        This object should contain 3 methods named chirpSound, birdDiet, and fly.
        The fly method must contain a conditional based on if the bird you chose can fly or not.
        If the bird can fly, the method when called will output I live in the sky, 
            if not then the method will output I'd like to stay on the ground.*/
let duck = {
    favoriteFood: ['Small fish', 'Seeds', 'Small Berries'],
    social: "outgoing",
    feathers: "waterproof",
    lifeSpan: "20 years",
    canFly: true,
    chirpSound: function(){
        return console.log("Quack, Quack!")
    },
    birdDiet: function(){
        let species = "Some ducks have evolved to eat more specialized diets."
        let seasons = "Ducks will take advantage of whatever food source is most plentiful during that particualr time of the year."
        let habitat = "A duck's habitat may change along its migratory route."
        return "A birds' diet may not be the samee for every duck. " + "Some factors that may affect their diet are the species, seasons, and habitat. " + species + " " + seasons + " " + habitat;
    },
    fly: function(){
        if(this.canFly === true){
            console.log('I live in the sky!');
        } else{
            console.log("I'd like to stay in the ground...");
        }
    }
}

/*Prompt 11: Create another object called house that contains the following:

        A total of 10 key value pairs.
        2 of the values should be booleans.
        Should contain 1 array.
        Should contain 3 methods.
        1 method should contain a conditional.
        At least 1 of the values should be an object that has 3 key value pairs.
*/
let house = {
    //key value pair 1
    porch: "empty",
    //key value pair 2
    door: "locked",
    //boolean 1
    bathroomOccupied: false,
    //boolean 2
    doorClosed: true,
    //array
    peopleInHouse: ["Mom","Dad", "sister", "brother"],
    //object with 3 key value pairs
    rooms: {
        roomOne: "Living Room",
        roomTwo: "Master Bedroom",
        roomThree: "Children's bedroom"
    },

    //method 1
    oldest: function(){
        return this.peopleInHouse[2] + " is the oldest child";
    },
    //method 2
    youngest: function(){
        return this.peopleInHouse[3] + " is the youngest child"
    },
    //method 3 with conditional
    bathroom: function(){
        if(this.bathroomOccupied === true){
            console.log("The bathroom is occupied right now. ");
        }else{
            console.log("Could you wait until it's unnocupied?If you need to go to the bathroom, you can");
        }
    }
}
