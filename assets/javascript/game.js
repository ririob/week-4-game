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
    var crystals;

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
        crystals = randomCrystalNum();
        // Genrates random number that we have to meet and renders it to the page
        randomNumber = randomNumGen();
        $("#random-area").text(randomNumber);
    };

    // function to render crystal images to page
    function renderCrystalImg() {
        for (var i in crystals) {
            var crystalDiv = $("<div class='crystals-button' data-name='" + i + "'>");
            var crystalImg = $("<img alt='image' class='crystl-img'>").attr("src", crystals[i].url);
            crystalDiv.append(crystalImg);
            $("#crystal-area").append(crystalDiv);
        }
    };

    // function to update page
    function updatePage(ifUserWin) {
        // $("#win-area").empty;

        // if user won
        if(ifUserWin === true) {
            alert("Congratulations, You won!");
            newGame();
            renderMatchingNumber();
        }
        else if(ifUserWin === false) {
            alert("Sorry, You lost. Try again!");
            newGame();
            renderMatchingNumber();
        }

        // building the win/loss display
        // var wSpan = $("<span>").text(wins);
        // var lSpan = $("<span>").text(losses);

        $("#win-area").text("Wins: " + wins);
        var pLosses = $("<p>").text("Losses: " + losses);

        // pWins.append(wSpan);
        // pLosses.append(lSpan);

        // $("#win-area").append(pWins);
        $("#win-area").append(pLosses);
    }

    // function to render matching number
    function renderMatchingNumber() {
        var scoreNumDiv = $("<div id='score-number'>").text(randomMatchingNumber);
        $("#score-area").html(scoreNumDiv);
        // $("#score-area").html(scoreNumDiv);
    }

    // function to update matched number
    function updateMatchingNumber(crystal) {
        // update the current guess number based on which crystals was clicked
        randomMatchingNumber += crystals[crystal.attr("data-name")].number;
    }

    // calling our functions to begin game
    newGame();
    renderCrystalImg();
    updatePage();
    renderMatchingNumber();

    // creating an onclick event for the crystals
    $(".crystals-button").on("click", function(event) {
        // update the current guess number and re-render it.
        updateMatchingNumber($(this));
        renderMatchingNumber();

        // check to see if user won or lost.
        // if current guess number equals the target number...
        if(randomMatchingNumber === randomNumber) {
            // increase wins, restart game and update page
            wins++;
            newGame();
            updatePage(true);
        }
        // if current guess exceeds targer number...
        else if(randomMatchingNumber > randomNumber) {
            // increase losses, restart game and update page
            losses++;
            newGame();
            updatePage(false);
        }
    })
});