function computerPlay(){
    let number = Math.ceil(Math.random()*3);
    if(number==1){
        return "rock";
    }else if(number==2){
        return "paper";
    }else{
        return "scissor"
    }
}

function playGame(computer,human){
    computer = computer.toLowerCase();
    human = human.toLowerCase();
    if(computer==human){
        return "Game Draw! No one Won";
    }
    if(human=="rock"){
        if(computer=="scissor"){
            return "You Won! Rock Beats Scissor";
        }else{
            return "You Lose! Paper Beats Rock";
        }
    }
    if(human=="scissor"){
        if(computer=="paper"){
            return "You Won! Scissor Beats Paper";
        }else{
            return "You Lose! Rock Beats Scissor";
        }
    }
    if(human=="paper"){
        if(computer=="scissor"){
            return "You Lose! Scissor Beats Paper";
        }else{
            return "You Won! Paper Beats Rock";
        }
    }
}
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
rock.addEventListener('click',function(){showGame("rock")});
paper.addEventListener('click',function(){showGame("paper")});
scissor.addEventListener('click',function(){showGame("scissor")});

let c=0,won=0;
function showGame(humanPlay){
const decider = document.querySelector('#decider');
if(won==0){
decider.innerText ="";		

	}
		let result = playGame(computerPlay(),humanPlay);
		const reporter = document.querySelector("#reporter");
		reporter.innerText = result;
		const count = document.querySelector("#count");
		c++;
		count.innerText = "Chances : "+c;
		if(result.includes("Won!"))won++;
		if(c==5){
			c=0;
			
			let finalstatement = (won>=3)?"You Won! Congrats":"Try Again! Looser";
			decider.innerText=finalstatement;
			won=0;
		}
	}






