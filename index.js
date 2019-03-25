//declaration of variables
var gamecount = 0, uwin = 0, cwin = 0;
var user_choice = null;
var com_choice = null;
var gameresult;

//returns choice of what the computer picked randomly
function computerPlay()
{

	var answer = Math.floor(Math.random() * (3) ) + 1;
	if (answer == 1)
		{ answer = "Rock"; }
	else if (answer == 2)
	{ answer = "Scissors"; }
	else { answer = "Paper"; }
	com_choice = answer;
	console.log("computer has chosen " + com_choice);
}

//once person clicks on a button the process is excecuted
function clickButton(clicked_id)
{	
	 if (clicked_id == "rbutton")
	 	user_choice = "Rock"
	else if (clicked_id == "pbutton")
		user_choice = "Paper"
	else user_choice = "Scissors";
	main(user_choice);

}

function writeResponse()
{
	let element = document.getElementById('userResponse').value;
	element = element.toLowerCase();
	if (element != "rock" && element != "paper" && element != "scissors")
	{
		alert("That is not a valid option. Please try again.");
		document.getElementById("myform").reset();

	}
	else{
	element = element.charAt(0).toUpperCase() + element.slice(1);
	console.log(element);
	main(element);
	}
}

function main(user_choice)
{	
	var result = document.getElementById("results");
	
	while (result.hasChildNodes()) {   
  result.removeChild(result.firstChild);
}
	computerPlay();
	gamecount++;
	if (gamecount > 5)
	{
		gamecount = 1;
		uwin = 0;
		cwin = 0;
	}

	decide(user_choice, com_choice);


	var newDiv = document.createElement("div");  
	newDiv.setAttribute("id", "resultText");                    
	var t = document.createTextNode("Number of games: " + gamecount + "\n User chose: " + user_choice + "\n Computer chose: " + com_choice + "\n Game result: " + gameresult + "\n Total Score - You: " + uwin + " Computer: " + cwin );
	newDiv.appendChild(t);                                          
	document.getElementById("results").appendChild(newDiv); 

	document.getElementById("results").style = "white-space: pre;"          

}
//calculates who wins based on what the user and computer chose
function decide(user_choice, com_choice)
{
	
	if (user_choice == "Rock" && com_choice ==  "Paper")
	{ 	uwin++;
		gameresult = "You win this round!"
	}
	else if (user_choice == "Paper" && com_choice == "Rock")
	{
		cwin++;
		gameresult = "You lost this round!"
	}
	else if (user_choice == "Paper" && com_choice == "Scissors")
	{
		cwin++;
		gameresult = "You lost this round!"
	}
	else if (user_choice == "Scissors" && com_choice == "Paper")
	{
		uwin++;
		gameresult = "You win!"
	}
	else if  (user_choice == "Rock" && com_choice == "Scissors")
	{
		uwin++;
		gameresult = "You win!"
	}
	else if  (user_choice == "Scissors" && com_choice == "Rock")
	{
		cwin++;
		gameresult = "You lost this round!"
	}
	else if (user_choice == "Paper" && com_choice == "Paper")
		gameresult = "It's a draw!"
	else if (user_choice == "Scissors" && com_choice == "Scissors")
		gameresult = "It's a draw!"
	else if (user_choice == "Rock" && com_choice == "Rock")
		gameresult = "It's a draw!"


}




