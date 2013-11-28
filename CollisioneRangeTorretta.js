

//Funziona tutto, con una o piu torrette i nemici vengono eliminati in ordine di apparizione, manca da implementare il cambio di target se un nemico ne supera un altro in velocita

var array_nemici = new Array();
var proiettile : GameObject;
var enemy : GameObject;
var vita : EnemyHP;
var nextFire = 1;
var i = 0;

function OnTriggerEnter2D(collision : Collider2D){

if (collision.gameObject.name != "Torre1"){//questa condizione serve fa in modo che nessuna torretta diventi un enemy

array_nemici.Push(collision.gameObject);

}


}



function OnTriggerExit2D(collision : Collider2D){
if (array_nemici.length > 0){                       
array_nemici.RemoveAt(0);       //questa condizione non va bene perchè rimuove il primo mostro che è entrato, ma non è detto
}                               //che il primo che entri sia anche il primo che esce.
Debug.Log("Hello");



}




function Update(){

if (array_nemici.length > 0){

  enemy = array_nemici[0];      //stessa cosa qui, come target prende in sequenza quelli dell'array ma deve prendere
                                //quello che sta uscendo dal suo range
  if (enemy == null){

    array_nemici.RemoveAt(0);

  }else{

    vita = enemy.GetComponent(EnemyHP);

  }

  if(Time.time > nextFire){

    if(vita.hp != 0){


      var clone = Instantiate(proiettile, Vector3(transform.position.x, transform.position.y+0.5, transform.position.z), transform.rotation);
      
      iTween.MoveTo(clone, Vector3(enemy.transform.position.x-0.3, enemy.transform.position.y, enemy.transform.position.z), 1);
    
        nextFire = Time.time + 1;
          
                    
        Destroy(clone,0.3f);
        vita.hp--;
        
          
        if(vita.hp == 0){
          Destroy(enemy, 0.2f);
          
            array_nemici.RemoveAt(0); 
            
          }




    }

}


}
  
 
}

