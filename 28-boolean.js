function bool(){ return false; }  // bu fonksiyon yanlis deger dondurur.

function tespit(sonuc){
    if(sonuc){
        return "dogru data";
    }
    return "yanlis data";
}
console.log(tespit(true));  // burda sonuc datasina boolean bir deger girdim, if yapisinin calismasi icin.
console.log(tespit());    // datayi girmedigim halde if yapisi calismaz ve yanlis data doner.