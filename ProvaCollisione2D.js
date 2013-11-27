#pragma strict
//OnCollsionEnter() registro in un array tutti i gameobject che entrano
//nell update controllo che nell array ci siano dei gameObject se si diventano target fino a che la vita del nemico o il range della torretta terminano




private var nextFire = 0.0;
var rateo = 0.7;
var proiettile : GameObject;
var i = 0;
var array_nemici = new ArrayList();
var vita : EnemyHP;
var enemy : GameObject;
var start = false;
var distance : float;

//una volta che il nemico entra nel raggio della torretta lo aggiungo ad un array
//la torretta avra come target il primo elemento dell array che rimmarra tale fino a quando il nemico muore o esce dal collider


function OnTriggerEnter2D(collision : Collider2D){
  
  array_nemici.Add(collision.gameObject);

  Debug.Log("Nemici:" + array_nemici);
  
  start = true;

}



function Update(){


if(start && array_nemici[0] != null){

enemy = array_nemici[0];
//Debug.Log("Dentro"+ i);

vita = enemy.GetComponent(EnemyHP);
      
  if(Time.time > nextFire){
  
  
    var clone : GameObject;
    
    
    
    if(vita.hp != 0 && Vector3.Distance(gameObject.transform.position, enemy.transform.position) < 5){
      
      clone = Instantiate(proiettile, Vector3(transform.position.x, transform.position.y+0.5, transform.position.z), transform.rotation);
      
      iTween.MoveTo(clone, Vector3(enemy.transform.position.x-0.3, enemy.transform.position.y, enemy.transform.position.z), 1);
    
        nextFire = Time.time + rateo;
					
                    
        Destroy(clone,0.3f);
        vita.hp--;
        
          
        if(vita.hp == 0){
          Destroy(enemy, 0.2f);
          if(0 < array_nemici.Count - 1){
            array_nemici.RemoveAt(0); 
            //i++; 
          }

      }

     }else{
      if(0 < array_nemici.Count - 1){
            array_nemici.RemoveAt(0);  
          }


      
     }
    
    }
    
  }

}


//problema se il nemico dentro la torretta muore e non c e nesssun altro nemico dentro il raggio della torretta, la torretta non spara piu



