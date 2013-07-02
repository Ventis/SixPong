#pragma strict

var cSpeed:float = 100.0;
var sFactor:float = 20.0;

//scores
static var playerScore:int = 0;
static var enemyScore:int = 0;

function Start () {
	rigidbody.AddForce(Vector3(0,1,40));
}

function Update () {
	var cvel = rigidbody.velocity;
	var tvel = cvel.normalized * cSpeed;
	rigidbody.velocity = Vector3.Lerp(cvel, tvel, Time.deltaTime * sFactor);
	
		
	if(transform.position.z < -50)
	{
		playerScore++;
		transform.position.x = 0;
		transform.position.y = 0;
		transform.position.z = 0;
	}

}