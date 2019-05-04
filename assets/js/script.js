$(document).ready(function(){//I need jQuery to run!
	var goal, current, redNumber, purpleNumber, blueNumber, greenNumber;
	var lose=0,win=0;
	var resetGame = function(){
		goal = Math.floor(Math.random()*101 + 19);
		current = 0;
		redNumber = Math.floor(Math.random()*12);
		purpleNumber = Math.floor(Math.random()*12);
		blueNumber = Math.floor(Math.random()*12);
		greenNumber = Math.floor(Math.random()*12);
	}

	resetGame();

	

	$("#button-red").attr('value', redNumber);
	$("#button-purple").attr('value', purpleNumber);
	$("#button-blue").attr('value', blueNumber);
	$("#button-green").attr('value', greenNumber);
	$("#win").html("Wins: "+ win);
	$("#lose").html("Losses: "+lose);

	$('.crystal-button').click(function(){
		current += parseInt($(this).attr('value'));
		$(".score").html("GOAL:  "+goal);
		$("#yourscore").html("YOUR SCORE: "+ current);
		console.log("the score", current);
		if(current>goal){
			lose++;
			$("#lose").html("Losses: "+lose);
			resetGame();
		}
		if(current==goal){
			win++;
			$("#win").html("Wins: "+win);
			resetGame();
		}
	});
	


});