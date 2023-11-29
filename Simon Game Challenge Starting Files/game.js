var buttonCol = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];


$(".btn").click(function(){
    var userCol = $this.attr("id");
    userPattern.push(userCol);
});

function nextSeq()
{
    var randNum = Math.floor(Math.random()*4); 
    var randCol = buttonCol[randNum];
    gamePattern.push(randCol);
    $("#"+randCol).fadeOut(100).fadeIn(100);
    playSound(randCol);
}

function playSound(randCol)
{
    
    $("sounds/"+randCol+".mp3").play();
    //var audio = new Audio("sounds/" + randomChosenColour + ".mp3"); 
    //audio.play();
}



