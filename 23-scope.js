var myGlobal = 5;

function x(){
    oopsGlobal = 10;  // oopsglobal scope olarak kullanilmakta ve global bir degisken.
}


function deneme(){
    var sonuc = "";

    if (typeof myGlobal != "undefined"){
        sonuc += "global: " + myGlobal;
    }

    if (typeof oopsGlobal != "undefined"){
        sonuc += "\noopsGlobal: " + oopsGlobal;
    }
    console.log(sonuc);
}

x();   // eger x fonksiyonu ilk calismazsa, deneme fonksiyonunun icindeki; oopsglobal if yapisi calismayacaktir.
deneme(); // suanda oopsglobali tanimlayabilir durumda, if yapimiz.
