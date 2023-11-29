var buttonCol = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSeq()
{
    var randNum = Math.floor(Math.random()*3); 
    var randCol = buttonCol[randNum];
    gamePattern.push(randCol);
}



