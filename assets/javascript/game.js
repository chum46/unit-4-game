// GLOBAL VARIABLES
var crystal = {
    blue:{value: 0}, green:{value: 0},
    orange:{value: 0}, pink:{value: 0}
};
var scoreTotal=0;
var targetNumber=0;
var winCount=0;
var lossCount=0;
var minNumber = 19;
var maxNumber = 120;
var blueClick=false;
var greenClick=false;
var orangeClick=false;
var pinkClick=false;

// FUNCTIONS
function gameStart() {
    // * The random number shown at the start of the game should be between 19 - 120.
    // * Each crystal should have a random hidden value between 1 - 12.
    targetNumber = randomNumberFromRange(minNumber, maxNumber);
    crystal.blue.value=randomNumberFromRange(1,12);
    crystal.green.value=randomNumberFromRange(1,12);
    crystal.orange.value=randomNumberFromRange(1,12);
    crystal.pink.value=randomNumberFromRange(1,12);
    // console.log(crystal.blue.value);
    // document.getElementById("randNum").innerHTML = targetNumber;
    $('#randNum').html(targetNumber);
    scoreTotal=0;
    $('#scoreBox').html(scoreTotal);
    // console.log(targetNumber);
}


function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function calculateTotal() {
    if (blueClick) {
        scoreTotal += crystal.blue.value;
        $("#scoreBox").html(scoreTotal);
        blueClick=false;
        matchTotal();
    }
    else if (greenClick) {
        scoreTotal += crystal.green.value;
        $("#scoreBox").html(scoreTotal);
        greenClick=false;
        matchTotal();
    }
    else if (orangeClick){
        scoreTotal += crystal.orange.value;
        $("#scoreBox").html(scoreTotal);
        orangeClick=false;
        matchTotal();
    }
    else if (pinkClick) {
        scoreTotal += crystal.pink.value;
        $("#scoreBox").html(scoreTotal);
        pinkClick=false;
        matchTotal();
    };
}

function matchTotal(){
    if (scoreTotal==targetNumber) {
        prompt("You Win!");
        winCount++;
        $('#winsCount').html(winCount);
        gameStart();
    }
    else if (scoreTotal>targetNumber) {
        prompt("You Lost.");
        lossCount++;
        $('#lossCount').html(lossCount);
        gameStart();
    };
}


// PROCESS
gameStart();

$('#blue').on("click", function() {
    blueClick=true;
    calculateTotal();
});

$('#green').on("click", function() {
    greenClick=true;
    calculateTotal();
});

$('#orange').on("click", function() {
    orangeClick=true;
    calculateTotal();
});

$('#pink').on("click", function() {
    pinkClick=true;
    calculateTotal();
});