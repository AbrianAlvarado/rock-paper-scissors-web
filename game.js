let humanScore = 0;
let computerScore = 0;



let getComputerChoice = () => {
    let mathRandom = Math.random();
    
    if (mathRandom < 0.33) {
        return "rock";
    } else if (mathRandom >= 0.33 && mathRandom <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }

};

let getHumanChoice = () => {
    return userInput = prompt("rock paper scissors shoot! ");
};




let playGame = () => {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    let playRound = (humanChoice, computerChoice) => {
        let humanChoiceLow = humanChoice.toLowerCase();
    
        if (humanChoiceLow == "rock" && computerChoice == "rock") {
            console.log("tie");
        } else if (humanChoiceLow == "rock" && computerChoice == "paper") {
            console.log("you lose. paper beats rock");
            ++computerScore;
        } else if (humanChoiceLow == "rock" && computerChoice == "scissors") {
            console.log("you win! rock beats scissors");
            ++humanScore;
        } else if (humanChoiceLow == "paper" && computerChoice == "rock") {
            console.log("you win! paper beats rock");
            ++humanScore;
        } else if (humanChoiceLow == "paper" && computerChoice == "paper") {
            console.log("tie");
        } else if (humanChoiceLow == "paper" && computerChoice == "scissors") {
            console.log("you lose. scissors beats paper");
            ++computerScore;
        } else if (humanChoiceLow == "scissors" && computerChoice == "rock") {
            console.log("you lose. rock beats scissors");
            ++computerScore;
        } else if (humanChoiceLow == "scissors" && computerChoice == "paper") {
            console.log("you win! scissors beats paper");
            ++humanScore;
        } else if (humanChoiceLow == "scissors" && computerChoice == "scissors") {
            console.log("tie");
        } else {
            return 2;
        }
    
    };


    for (let i = 0; i++; i < 5) {
        playRound(humanChoice, computerChoice);
    }


};

playGame();