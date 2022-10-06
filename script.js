const compOptions = ["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    const compInput = compOptions[Math.floor(Math.random() * 3)];
    return compInput
}
function playRound(playSelection, compSelection) {
    if (playSelection === compSelection){
        return "TIE!";
    }else if (playSelection === "Paper" && compSelection === "Rock") {
        return "WIN"
    }else if (playSelection === "Rock" && compSelection === "Scissors") {
        return "WIN"
    }else if (playSelection === "Scissors" && compSelection === "Paper") {
        return "WIN"
    }else {
        return "LOSE"
    }
}
const playSelection = "Rock";
const compSelection = getComputerChoice();
console.log(playRound(playSelection, compSelection));
