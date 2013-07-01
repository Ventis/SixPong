#pragma strict

var speed:int = 100;

var playingFieldWidth:int = 100;
var playingFieldHeight:int = 100;

var playerWidth:int = 20;
var playerHeight:int = 20;

function Update () 
{
	//Player input
	var upDownMovement:float = Input.GetAxis("Vertical");
	var leftRightMovement:float = Input.GetAxis("Horizontal");
	
	upDownMovement *= speed;
	leftRightMovement *= speed;
		
	transform.Translate(Vector3(leftRightMovement,upDownMovement,0)*Time.deltaTime);

	//check bounds
	if(Mathf.Abs(transform.position.x) > ((playingFieldWidth/2)-(playerWidth/2)))
	{
		transform.position.x = ((playingFieldWidth/2)-(playerWidth/2))*Mathf.Sign(transform.position.x);
	}
	
	if(Mathf.Abs(transform.position.y) > ((playingFieldHeight/2)-(playerHeight/2)))
	{
		transform.position.y = ((playingFieldHeight/2)-(playerHeight/2))*Mathf.Sign(transform.position.y);
	}
}