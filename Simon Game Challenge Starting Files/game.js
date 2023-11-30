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
    check(userPattern.length-1);
});

function nextSeq()
{
    userPattern.length = 0;
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

function check(curLevel)
{
    if(userPattern[curLevel]===gamePattern[curLevel])
    {
        console.log("success");
        if(userPattern.length === gamePattern.length)
        {
            setTimeout(function(){
                nextSeq();
            }, 1000);
        }
    }
    else
    {
        console.log("wrong");
        // var audio = new Audio("sounds/wrong.mp3");
        // audio.play();
        playSound("wrong");

        $("body").addClass(".game-over");
        setTimeout(function(){
            $("body").removeClass(".game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}



