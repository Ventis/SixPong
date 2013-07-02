#pragma strict

var pScore:String;

function OnGUI()
{
	pScore = Ball.playerScore.ToString();
	GUI.Label(Rect (270,0,50,20), pScore);
}