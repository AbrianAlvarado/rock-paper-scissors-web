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



const buttons = document.getElementById("btn-container");
let userInput;


buttons.addEventListener("click", function (event) {
   if (event.target.tagName === "BUTTON") {
    playRound(event.target.id);
   }
});



function playRound (e) {
   userInput = e;
   let computerChoice = getComputerChoice();

   if (userInput == "rock" && computerChoice == "rock") {
    console.log("tie");
   } else if (userInput == "rock" && computerChoice == "paper") {
    console.log("you lose. paper beats rock");
   } else if (userInput == "rock" && computerChoice == "scissors") {
    console.log("you win. rock beats scissors");
   } else if (userInput == "paper" && computerChoice == "rock") {
    console.log("you win. paper beats rock");
   } else if (userInput == "paper" && computerChoice == "paper") {
    console.log("tie");
   } else if (userInput == "paper" && computerChoice == "scissors") {
    console.log("you lose. scissors beats paper");
   } else if (userInput == "scissors" && computerChoice == "rock") {
    console.log("you lose. rock beats scissors");
   } else if (userInput == "scissors" && computerChoice == "paper") {
    console.log("you win. scissors beats rock");
   } else if (userInput == "scissors" && computerChoice == "scissors") {
    console.log("tie");
   } else {
    console.log("other");
   }
};


playRound(userInput);