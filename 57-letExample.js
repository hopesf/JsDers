function checkLet(){
    "use strict";
    let i = "fonksiyondaki let";
    if (true){
        let i = "if deki let";
        console.log("if check : ", i);
    }
    console.log("fonksiyon check : ", i);
    return i;
}
checkLet();