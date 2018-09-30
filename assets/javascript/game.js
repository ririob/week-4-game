$(document).ready(function() {
    // Creating Variables
    // This is our current Guess number. Which will be set to zero
    var randomMatchingNumber = 0;

    // This is the random number that will try to reach
    var randomNumber = randomNumGen();

    // Our starting variables
    var wins = 0;
    var losses = 0;
    // var counter = 0;
    var crystal;

    // Function to create a random number between 1 and 12 and return our crystal objects
    function randomCrystalNum() {
        return {
            firstCrystal: {
                number: Math.round(Math.random() * 12) + 1,
                url: "assets/images/crystal-1.jpg"
            },
            secondCrystal: {
               number: Math.round(Math.random() * 12) + 1,
               url: "assets/images/crystal-2.jpg"
            },
            thirdcCrystal: {
               number: Math.round(Math.random() * 12) + 1,
               url: "assets/images/crystal-3.jpg"
            },
            fourthCrystal: {
               number: Math.round(Math.random() * 12) + 1,
               url: "assets/images/crystal-4.jpg"
            }
        };
    }

    // Function  to create a random number between 19 to 120
    function randomNumGen() {
        return Math.round(Math.random() * 102) + 19;
    };

    // Function that resets the game
    function newGame() {
        // Makes the current total number 0
        randomMatchingNumber = 0;
        // Generates random crystal values
        crystal = randomCrystalNum();
        // Genrates random number that we have to meet and renders it to the page
        randomNumber = randomNumGen();
        $("#random-area").text(randomNumber);
    };
    newGame();
});