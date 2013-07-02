#pragma strict

var pScore:GUIText;

function OnGUI()
{
	pScore.text = Ball.playerScore;

}