let abc = "data";
let qwe;

abc = "code";               // sadece let,const ile bir kere tanimlayabilirim. ve tekrar degistirmek istersem let koymadan degistirebilirim.

function x(){
    "use strict";          // es6 ek hata bildirme kodu

    abc = "memduh";
    qwe = abc + " topu tut!";
    return qwe;
}
console.log(x());

/*
* var = bu eski bir yapi, global ve yerel olabilir.
* let = bu sadece yerel olabilir, mesela bir fonksiyonun icinde degisken atarsam sadece o fonksiyonda kalir. tum sayfada kullanilamaz.
* const = kesinlikle sadece bir kere tanimlanir ve birdaha degisemez.
* */