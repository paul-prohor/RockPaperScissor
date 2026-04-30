let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset");


const genCompChoice = ()=> {
    let options = ["rock", "paper", "scissors"];
    let id = Math.floor(Math.random() * 3);
    return options[id];
}

const drawGame = ()=> {
    msg.innerText = "Game Was Draw!"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=> {
    const compChoice = genCompChoice();

    if(userChoice===compChoice) drawGame();
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true; 
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true; 
        }else{
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        genCompChoice();
    })
})

const resetGame = ()=> {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play Your Move"
    msg.style.backgroundColor = "#081b31";
    
}

resetBtn.addEventListener("click", resetGame)