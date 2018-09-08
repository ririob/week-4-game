$(document).ready(function() {

    // Our current guess number.
    var gameMatchingNumber = 0;

    // Generates the random number we will try to reach.
    var randomNum = randomNumGen();

    // Our starting variables
    var wins = 0;
    var losses = 0;
    var crystals;

    // Create Audio for crystals click
    // var audioElement = document.createElement("audio");
    // set it's source to the location
    // audioElement.setAttribute("src", "assets/images/switch-1.mp3");
    // play tone
    //$(".crystals-button").on("click", function() {
       // audioElement.play();
    //})

    // Function that generate random values for crystals and returns crystals object.
    function randomNumCrystals() {
        // Crystals Object.
        return {
            crystal1: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/crystal-1.jpg"
            },
            crystal2: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/crystal-2.jpg"
            },
            crystal3: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/crystal-3.jpg"
            },
            crystal4: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/crystal-4.jpg"
            }
        };
    }

    // Function to generate random number between 19 and 120
    function randomNumGen() {
        return Math.floor(Math.random() * 102) + 19;
    }

    // functions that resets the game
    function setGame() {
        // make current total number 0
        gameMatchingNumber = 0;
        // generate random crystals values
        crystals = randomNumCrystals();
        // Generate a random target number and render it to the page
        randomNum = randomNumGen();
        $("#random-area").text(randomNum);
    }

    // Function that handles updating the page
    function updateDom(didUserWin) {
        $("#win-area").empty();

        // If user won...
        if (didUserWin === true) {
            // Show victory message, restart the game, and render new "current guess" number.
            $(alert("Congratulations, You won!!"));
            setGame();
            renderMatchingNumber();
        }
        // If the user lost...
        else if (didUserWin === false) {
            // show defeat message and so on..
            $(alert("Really sorry, You lost. Try again!!"));
            setGame();
            renderMatchingNumber();
        }

        // Building win/loss display and appending it to the page.
        var wSpan = $("<span>").text(wins);
        var lSpan = $("<span>").text(losses);

        var pWins = $("<p>").text("Wins: ");
        var pLosses = $("<p>").text("Losses: ");

        pWins.append(wSpan);
        pLosses.append(lSpan);

        $("#win-area").append(pWins);
        $("#win-area").append(pLosses);
    }

    // Funtion to render crystals to the page.
    function renderCrystals() {
        for (var key in crystals) {
            var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
            var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
            crystalDiv.append(crystalImg);
            $("#crystal-area").append(crystalDiv);
        }
    }

    // Function to update "current guess" mumber.
    function updateMatchingNumber(crystal) {
        // Update current guess number based on which crystal was clicked.
        gameMatchingNumber += crystals[crystal.attr("data-name")].points;
    }

    // Function to render current guess number to the page.
    function renderMatchingNumber() {
        var scoreNumDiv = $("<div id='score-number'>").text(gameMatchingNumber);
        $("#score-area").html();
        $("#score-area").html(scoreNumDiv);
    }

    // Call functions to start the game.
    setGame();
    updateDom();
    renderCrystals();
    renderMatchingNumber();

    // Here create an onclick event for the crystals.
    $(".crystals-button").on("click", function(event) {
        // Update current number and re-render it
        updateMatchingNumber($(this));
        renderMatchingNumber();

        //check to see if player won or lost
        // If our current guess equals the the target number...
        if (gameMatchingNumber === randomNum) {
            //wins,  restart the game and update the page
            wins++;
            setGame();
            updateDom(true);
        }
        // If guess number exceeds target number...
        else if (gameMatchingNumber > randomNum) {
            // losses restart the game and update the page
            losses++;
            setGame();
            updateDom(false);
        }
    });
});