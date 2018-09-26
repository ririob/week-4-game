$(document).ready(function() {
    // Creating Variables
    var randomNumber = 0;

    // Function to create random number at start of game
    function generateRandomNumber () {
        // In this line I calculated the the randomNumber to give me a random number between 19 and 120
        randomNumber = Math.floor(Math.random() * 120) + 19;
        // Here I will append the random number to my HTML page
        $("#random-area").append(randomNumber);
    }
    // calling the generateRandomNumber function
    generateRandomNumber();
})