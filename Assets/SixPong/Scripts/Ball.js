#pragma strict

var cSpeed:float = 10.0;
var sFactor:float = 10.0;

//scores
var playerScore:int = 0;
var enemyScore:int = 0;

function Start () {
	rigidbody.AddForce(Vector3(0,1,10));
}

function Update () {
	var cvel = rigidbody.velocity;
	var tvel = cvel.normalized * cSpeed;
	rigidbody.velocity = Vector3.Lerp(cvel, tvel, Time.deltaTime * sFactor);
	
		
	if(transform.position.z < -5)
	{
		enemyScore++;
		transform.position.x = 0;
		transform.position.y = 0;
		transform.position.z = 0;
	}
	
	/*if(transform.position.x < -23)
	{
		enemyScore++;
		transform.position.x = 0;
		transform.position.y = 0;
	}*/
}