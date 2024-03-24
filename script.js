//0=rock
//1=paper
//2=scissors

//attribute main to variable
const main = document.querySelector("main");


//assign buttons to variables
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//declare score variables
let numWins = 0;
let numLosses = 0;
let numTies = 0;

//displaying score
let displayChoice = function() {
    return `
        <h2>Number of wins: ${numWins}</h2>
        <h2>Number of losses: ${numLosses}</h2>
        <h2>Number of Ties: ${numTies}</h2>
`;
}
const winLossSection = document.querySelector("#winloss");
winLossSection.innerHTML = displayChoice();

//comp choice function
let compChoice = function() {
    return Math.floor(Math.random() * 3);
}

//log user choice
let userChoice;
rockButton.addEventListener('click', function(event){
    userChoice = 0;
    console.log("user chose: " + userChoice);
});
paperButton.addEventListener('click', function(event){
    userChoice = 1;
    console.log("user chose: " + userChoice);

});
scissorsButton.addEventListener('click', function(event){
    userChoice = 2;
    console.log("user chose: " + userChoice);

});



const roundDisplay = document.querySelector("#round");
roundDisplay.innerHTML = "Choose an option and see if you WIN!";

//user choice function
let roundResult;
const compare = function(choice1, choice2) {
    if(choice1 == choice2) {
        numTies += 1;
        roundDisplay.innerHTML = "It's a tie!";
    }if(choice1 == 0 && choice2 == 1) {
        numLosses += 1;
        roundDisplay.innerHTML = "You chose rock.The computer chose paper. You lost.";
    }if(choice1 == 0 && choice2 == 2) {
        numWins += 1;
        roundDisplay.innerHTML = "You chose rock. The computer chose scissors. You Win!";
    }if(choice1 == 1 && choice2 == 0) {
        numWins += 1;
        roundDisplay.innerHTML = "You chose paper. The computer chose rock. You Win!";
    }if(choice1 == 1 && choice2 == 2) {
        numLosses += 1;
        roundDisplay.innerHTML = "You chose paper. The computer chose scissors. You lose.";
    }if(choice1 == 2 && choice2 == 0) {
        numLosses += 1;
        roundDisplay.innerHTML = "You chose scissors. The computer chose rock. You lose.";
    }if(choice1 == 2 && choice2 == 1) {
        numWins += 1;
        roundDisplay.innerHTML = "You chose scisssors. The computer chose paper. You Win!";
    }
}

//display round result



//run game and update score
const allButtons = document.querySelectorAll("button");
for(let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function(event) {
        compare(userChoice, compChoice())
        console.log("num w: " + numWins + "  num l:" + numLosses + " num t: "  + numTies);
        displayChoice();
        winLossSection.innerHTML = displayChoice();
    })
}


