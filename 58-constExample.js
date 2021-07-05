function checkConst(data){
    "use strict";

    const birlestir = data + " Dunya!";

 //    birlestir = data + " bu kisim calismayacak."     bu kod calismadi cunku const sadece bir kere tanimlanabilir. degistirilemez.

    for(let i =0; i < data.length; i++){
        console.log(birlestir);
    }
}

checkConst("Merhaba");