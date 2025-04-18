let userScore=0;
let computerScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscore=document.querySelector("#user-score");
let computerscore=document.querySelector("#computer-score");


choices.forEach((choice) => {
  choice.addEventListener("click",() => {
    const userchoice=choice.getAttribute("id");
    console.log("choice was clicked",userchoice);
    
    playgame(userchoice);

  })
})

const drawgame=() =>{
  console.log("game was draw");
  msg.innerText="Game Was Draw";
  msg.style.backgroundColor="orange";
}

const playgame=(userchoice) => {
  console.log("userchoice=",userchoice);
  const computerchoice=gencomputerchoice();
  console.log("computerchoice=",computerchoice);
  if(userchoice===computerchoice) {
    drawgame();
  } else{
    let userWin=true;
    if(userchoice==="rock") {
      userWin=computerchoice==="paper" ? false:true;
    } else if(userchoice==="paper"){
      userWin=computerchoice==="scissors" ? false:true;
    } else{
      userWin=computerchoice==="rock" ? false:true;
    }
    showWinner(userWin);
  }
  if (userScore === 10 || computerScore === 10) {
    declareWinner();
  }

}


const gencomputerchoice=() => {
  const options=["rock","paper","scissors"];
  const randidx=Math.floor(Math.random()*3);
  return options[randidx];
}

const showWinner=(userWin) => {
  if(userWin){
    userScore++;
    userscore.innerText=userScore;
    console.log("you win!");
    msg.innerText="You Winner";
    msg.style.backgroundColor="green";
  }else{
    computerScore++;
    computerscore.innerText=computerScore;
    console.log("you lose");
    msg.innerText="You Lose";
    msg.style.backgroundColor="red";
  }
} 



const declareWinner = () => {
  if (userScore === 10) { 
    msg.innerText = "Congratulations The winner"; 
    msg.style.backgroundColor = "blue";
  } else if (computerScore === 10) { 
    msg.innerText = "The Winner is Computer";
    msg.style.backgroundColor = "purple";
  }
  
  
  userScore = 0;
  computerScore = 0;
  userscore.innerText = userScore;
  computerscore.innerText = computerScore;
}

  


