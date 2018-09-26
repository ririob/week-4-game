$(document).ready(function() {
    // Creating Variables
    var randomNumber = 0;
    var crystalRandomNumber;
    var wins = 0;
    var loss = 0;

    // Function to create random number at start of game
    function generateRandomNumber () {
        // In this line I calculated the the randomNumber to give me a random number between 19 and 120
        randomNumber = Math.floor(Math.random() * 120) + 19;
        // Here I will append the random number to my HTML page
        $("#random-area").append(randomNumber);
    }

    // Function to generate random number for each crystal
     $("img").one("click", function() {
        crystalRandomNumber = Math.floor(Math.random() * 9) + 1;

        //  if(!$(this).data('number')){

            // $(this).data('number',crystalRandomNumber);

            // $("#score-area").append(crystalRandomNumber);

        // }
        $("#score-area").append(crystalRandomNumber);
    });
    // calling the generateRandomNumber function
    generateRandomNumber();
})