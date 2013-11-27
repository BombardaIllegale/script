


function OnTriggerEnter2D(collision : Collider2D){



}

//la function Identify enemy andra nell Update()
function IdentifyEnemy(){
//aggiungo ad un array ogni enemy che entra nella collision
//faccio un cilclo for che cerca prende la posizione tra tutti <code> array_nemici[i].transform.position.x </code> le posizioni vengono confrontate e quello con la x piu grande diventa l obbiettivo della torretta
//una volta preso l obbiettivo la torretta controlla che sia nel suo range <code> Vector3.Distance(gameObject.transform.position, enemy.transform.position) < n </code> e che la vita del gameObject sia diversa da 0
//la torretta istanzia il proiettile che si muove contro il nemico selezionato, la vita viene diminuita
//controllo che la vita sia = 0,in questo caso distruggo il nemico e lo rimuovo dall array
//ricomputo il for e faccio tutto da capo 



}

function Update(){



  
}
