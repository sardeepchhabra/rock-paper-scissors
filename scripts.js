
let playerSelection ;    
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll(".button");
const main = document.querySelector("main");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();
  
      game(playerSelection);
      }
    );
  });
function random(min, max) {
    // console.log(Math.floor(Math.random() * (max - min + 1) ) + min);
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}   
function computerPlay()
{
    let String_array = ["ROCK","PAPER","SCISSOR"];
    // return String_array[Math.floor(random(1,4)-1)];
    return String_array[random(1,3)-1]; 
}
function playRound(playerSelection, computerSelection)
{
    console.log(computerSelection);
    console.log(playerSelection);
    // console.log("insode playround function");
    if(playerSelection.toUpperCase()=='ROCK' && computerSelection == 'SCISSOR') 
    {
        // playercount +=1;
        // console.log("Inside an if condition");
        // console.log();
        return 1;
    }
    else if (playerSelection.toUpperCase()=='PAPER' && computerSelection=='ROCK')
    {
        // playercount +=1;
        // console.log("");
        return 1;
    }
    else if(playerSelection.toUpperCase()=='SCISSOR' && computerSelection=='PAPER')
    {
        // playercount +=1;
        // console.log("");
        return 1;
    }
    else if(computerSelection=='ROCK' && playerSelection.toUpperCase()== 'SCISSOR')
    {
        // computercount +=1;
        // console.log("");
        return 0;
    }
    else if (computerSelection=='PAPER' && playerSelection.toUpperCase()=='ROCK')
    {
        // computercount +=1;
        // console.log("");
        return 0;
    }
    else if(computerSelection=='SCISSOR' && playerSelection.toUpperCase()=='PAPER')
    {
        // computercount+=1;
        // console.log("");
        return 0;
    }
    else
    {
        console.log("Its a draw;");
        return -1;
    }
    // console.log("last line of playround function");
}

// console.log("computers selection " + computerPlay());
function game(playerSelection)
{   
    let winning_lines = ["Yes ! you won a round so what, is this a joke.",
    "You won this round against a machine, you'd be nowhere if it was with human.",
    "Won a round Feel Happy Now."]
    let losing_lines = ["You Lost to a computer Are you for real","Thats a win for the machines",
    "Machines are soon going to take over the world"];
    let result = playRound(playerSelection,computerPlay());
    if(result==1)
    {
        playerScore +=1;
        let e=document.getElementsByClassName('player-score');
        e[0].innerHTML = playerScore;
        // console.log(e);
        e.getElementBy
        let res = (winning_lines[random(1,3)-1]);
        document.getElementsByClassName('result')[0].innerHTML = res;
    }
    else if(result==0)
    {

        computerScore+=1;
        document.getElementsByClassName('computer-score')[0].innerHTML = computerScore;
        
        let res = (losing_lines[random(1,3)-1]);
        document.getElementsByClassName('result')[0].innerHTML = res;
    }
    else if(result==-1)
    {
        //do nothing
        document.getElementsByClassName('result')[0].innerHTML = " Its a draw";
    }
    console.log("Reached an end we want to exexute further;")

    if(playerScore == 5)
    {
        document.documentElement.innerHTML = '';
        const para = document.createElement("P");
        const t = document.createTextNode("Humanity has been saved, All Thanks to you !");
        para.appendChild(t);
        document.body.style.backgroundColor = "black";
        document.body.appendChild(para);
        para.style.color = "white";
        para.style.fontSize = "x-large";
        // para.style.fontWeight = "900";
        para.style.textAlign = "center";
        console.log("Humanity is saved.HOORAH");
    // rplContent();
    }
    else if(computerScore == 5)
    {
        document.documentElement.innerHTML = '';
        const para = document.createElement("P");
        const t = document.createTextNode("We Lost to Robots, All thanks to you!");
        para.appendChild(t);
        document.body.style.backgroundColor = "black";
        document.body.appendChild(para);
        para.style.color = "white";
        para.style.fontsize = "x-large";
        para.style.textAlign = "center";
        console.log("We lost to robots.ALL thanks to you.");
        // rplContent();
    }
    
}
