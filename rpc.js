
let userScore = 0;
let computerScore = 0;
let img = document.getElementById("image");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randNum = Math.floor(Math.random()*3);
    return choices[randNum];
}


function convertToWord(letter){
    if (letter=="r") return "Rock";
    if (letter=="p") return "Paper";
    return "Scissor";
}
function win(userChoice,compChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    img.src = "Images/thumbsup.png";
    setTimeout(function(){img.src = ""},1000);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You Win! 🔥`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);

}

function lose(userChoice,compChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    img.src = "Images/thumbsdown.png";
    setTimeout(function(){img.src = ""},1000);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}. You Lose! 💩`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300);
}
function draw(userChoice,compChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    img.src = "";
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} drew with ${convertToWord(compChoice)}${smallCompWord}. It's a Draw!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},300);
}

function game(userChoice){
    const compChoice = getComputerChoice();
    switch(userChoice + compChoice){
        case "pr":
        case "rs":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break; 
    }

}

function main(){
    rock_div.addEventListener("click",function() {
    game("r");
    })

    paper_div.addEventListener("click",function() {
        game("p");
    })

    scissors_div.addEventListener("click",function() {
        game("s");
    })
}

main();
