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
    const car = {
        make : "ford",
        model : "mustang",
        color : "black",
        type : "sedan",
        tires : "firestone",
        mode : "sport",
        gasoline : "super"
    }
    delete car.gasoline;
    console.log(car);

//Prompt 4: Write a function that returns the object keys as an array.
function objectKeyToArray() {
    const car = [
        { make : "ford"},
        { model : "mustang"},
        { color : "black"},
        { type : "sedan"},
        {tires : "firestone"},
        {mode : "sport"}, 
        {gasoline : "super"}
    ]
    console.log(car[0][0]); //???
}
//Prompt 5: Write a function that returns the object's values as an array.

/*Prompt 6: Add two more properties to the object tints: 33% and carplay: true. 
Print to the console to make sure properties were added.*/

/*Prompt 7: Add a method called startEngine with the following:
    When method is called, it prints "VROOM VROOM" to the console.
        Contains a variable engineOn with a boolean value set to true.
        Prompt 8: Add a method called turnOffEngine with the following:

    When method is called, it prints "car turned off" to the console.
        Contains a variable engineOn with a boolean value set to false.
    */
/*Prompt 9: Write a loop that iterates through the above object's properties. 
    Hint: You will need to turn the object into an array using 1 of 3 object methods in order to loop through it.
*/

/*Prompt 10: Using the directions below, create an object:

    Choose one of the following: duck, eagle, or penguin.
        Add an array to the object called favoriteFood, listing the 3-5 favorite foods of the bird.
        Provide the object with 4 key:value pairs, one of which being a boolean value named canFly.
        This object should contain 3 methods named chirpSound, birdDiet, and fly.
        The fly method must contain a conditional based on if the bird you chose can fly or not.
        If the bird can fly, the method when called will output I live in the sky, if not then the method will output I'd like to stay on the ground.
        Prompt 11: Create another object called house that contains the following:

        A total of 10 key value pairs.
        2 of the values should be booleans.
        Should contain 1 array.
        Should contain 3 methods.
        1 method should contain a conditional.
        At least 1 of the values should be an object that has 3 key value pairs.
*/