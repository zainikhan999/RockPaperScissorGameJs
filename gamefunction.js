let userScore = 0;
let computerScore = 0;
let bgcolor;
let flag = 0;
const computerChoice = (() => {
    const choiceArray = ["choiceRock", "choicePaper", "choiceScissors"]
    const randomIndex = Math.floor(Math.random() * 3)
    return choiceArray[randomIndex];
}
)

const play = ((userChoice) => {
    console.log(userChoice);
    const computergeneratedChoice = computerChoice();
    console.log("computer choice", computergeneratedChoice);


    //first user choice is rock 
    if (userChoice == "choiceRock" && computergeneratedChoice == "choicePaper") {
        console.log("you choose", userChoice, "and computerchoose", computergeneratedChoice);
        updateResult = document.querySelector(".result .resultHeading h1");
        updateResult.innerText = "Computer got 1 point selected "+computergeneratedChoice;
        console.log("Computer got 1 point");
        computerScore++;
    }
    else if (userChoice == "choiceRock" && computergeneratedChoice == "choiceScissors") {
        console.log("you choose", userChoice, "and computerchoose", computergeneratedChoice);
        console.log("you won");
        updateResult = document.querySelector(".result .resultHeading h1");
        updateResult.innerText = "You got 1 point, computer selected "+computergeneratedChoice;


        userScore++;

    }
    //first user choice is paper 
    else if (userChoice == "choicePaper" && computergeneratedChoice == "choiceScissors") {
        console.log("you choose", userChoice, "and computerchoose", computergeneratedChoice);
        console.log("you lose");
        updateResult = document.querySelector(".result .resultHeading h1");
        updateResult.innerText = "Computer got 1 point selected "+computergeneratedChoice;
        computerScore++;
    }
    else if (userChoice == "choicePaper" && computergeneratedChoice == "choiceRock") {
        console.log("you choose", userChoice, "and computerchoose", computergeneratedChoice);
        console.log("you win");
        updateResult = document.querySelector(".result .resultHeading h1");
        updateResult.innerText = "You got 1 point computer selected "+computergeneratedChoice;
        userScore++;
    }
    //   //first user choice is scissors
    else if (userChoice == "choiceScissors" && computergeneratedChoice == "choiceRock") {
        console.log("you choose", userChoice, "and computerchoose", computergeneratedChoice);
        console.log("you lose");
        updateResult = document.querySelector(".result .resultHeading h1");
        updateResult.innerText = "Computer got 1 point selected "+computergeneratedChoice;
        computerScore++;
    }
    else if (userChoice == "choiceScissors" && computergeneratedChoice == "choicePaper") {
        console.log("you choose", userChoice, "and computerchoose ", computergeneratedChoice);
        console.log("you win");
        updateResult = document.querySelector(".result .resultHeading h1");
        updateResult.innerText = "You got 1 point,computer selected "+computergeneratedChoice;
        userScore++;
    }
    else {
        console.log("it a draw");
        updateResult = document.querySelector(".result .resultHeading h1");
        updateResult.innerText = "Both got 0 points draw!";
    }
    return [computerScore, userScore];

});


const userselection = document.querySelectorAll(".components");
console.log(userselection);
userselection.forEach((c) => {
    console.log(c);
    c.addEventListener("click", () => {
        const userChoice = c.getAttribute("id");
        const userChoiceId = console.log("choice was clicked", userChoice);
        //   play(userChoice);

        const [computer, user] = play(userChoice);
        console.log(computer);
        console.log(user);
        computerUpdate = document.querySelector(".scorebuttonComp h3");
        computerUpdate.innerText = computer;
        userUpdate = document.querySelector(".scorebuttonUser h3");
        userUpdate.innerText = user;
        winner = document.querySelector(".winner h1");
        winner.addEventListener("click", () => {
            if (user < computer) {
              
                winner.innerHTML = "You lose";
                bgcolor=winner.style.backgroundColor = "rgb(255, 0, 0)";

            }
            else if (user > computer) {
             
                winner.innerHTML = "you Won!";
                
                bgcolor=winner.style.backgroundColor = "rgb(100, 172, 62)";
              
                
            }
            else {
               
                winner.innerHTML = "It's a draw";
                bgcolor=winner.style.backgroundColor = "orange";
               

            }

        } );
        
        
    });

});

// reset
resetAll = document.querySelector(".reset h1");
resetAll.addEventListener("click", () => {

    userScore = 0;
    computerScore = 0;

    document.querySelector(".scorebuttonComp h3").innerHTML = "0";
    document.querySelector(".scorebuttonUser h3").innerHTML = "0";
    document.querySelector(".resultHeading h1").innerHTML = "Pick Your Move";
   
    resetcolor = document.querySelector(".winner h1");
    resetcolor.innerHTML="Winner?";
    resetcolor.style.backgroundColor ="rgb(100, 172, 62)";

    



});



