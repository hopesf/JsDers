function abc(val){
    var cevap = "";

    switch (val){
        case 1:
            cevap = "Alpha";
            break;
        case 2:
            cevap = "Beta";
            break;
        case 3:
            cevap = "Omega";
            break;
    }
    return cevap;
}

console.log( abc(1) );

/*
* 1- alpha
* 2- beta
* 3- omega
* */