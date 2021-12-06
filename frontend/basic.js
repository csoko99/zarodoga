fetch("http://localhost:3000/animek")
.then(x => x.json())
.then(y => felvitel(y));

function felvitel(adatok){
    console.log(adatok);
    var sz="";
    for(var elem of adatok){
        
        sz+='<div class="col-sm-3"><img src="kepek/'+elem.anime_id+'.jpg" alt="'+elem.anime_nev+'">'+'<br> <spam>Név: </span>'+elem.anime_nev+'<br><spam>Megjelenési dátum: </span>'+elem.anime_megjdatum+' <br> <spam>Műfaj: </span>'+elem.anime_mufaj+' <br> <spam>Évadok száma: </span>'+elem.anime_evadsz
        sz+='</div>'
        
    }
    document.getElementById("ide").innerHTML=sz;


}