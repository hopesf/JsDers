function abc(val){
    var cevap = "";

    switch (val){
        case 1:
        case 2:                 // burda case 1 2 3, 4 5 6 ve 7 8 9, hepsi ayri birer grup. 1 2 3 = dusuk
        case 3:
            cevap = "dusuk";
            break;
        case 4:
        case 5:                // 4 5 6 = orta
        case 6:
            cevap = "orta";
            break;
        case 7:
        case 8:                // 7 8 9 = yuksek
        case 9:
            cevap = "yuksek";
            break;
    }
    return cevap;
}

console.log( abc(7) );

/*
* 1- alpha
* 2- beta
* 3- omega
* */