function abc(val){
    var cevap = "";

    switch (val){
        case "a":
            cevap = "akilli-telefon";
            break;
        case "b":
            cevap = "bilgisayar";
            break;
        case "c":
            cevap = "caner";
            break;
        default:
            cevap = "javascript";
            break;
    }
    return cevap;
}

console.log( abc("d") );

/*
* 1- alpha
* 2- beta
* 3- omega
* */