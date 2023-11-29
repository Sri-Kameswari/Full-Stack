var buttonCol = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var started = false;

$(document).keypress(function(e){
    if(!started)
    {
        $("#level-title").text("Level "+level);
        nextSeq();
        started = true;
    }
});

$(".btn").click(function(){
    var userCol = $(this).attr("id");
    userPattern.push(userCol);
    playSound(userCol);
    animatePress(userCol);
});

function nextSeq()
{
    level++;
    $("#level-title").text("Level "+level);
    var randNum = Math.floor(Math.random()*4); 
    var randCol = buttonCol[randNum];
    gamePattern.push(randCol);
    $("#"+randCol).fadeOut(100).fadeIn(100);
    playSound(randCol);
}

function playSound(randCol)
{
    var audio = new Audio("sounds/" + randCol + ".mp3"); 
    audio.play();
}

function animatePress(curCol)
{
    $("#"+curCol).addClass("pressed");
    setTimeout(function(){
        $("#"+curCol).removeClass("pressed");
    }, 100);
}



