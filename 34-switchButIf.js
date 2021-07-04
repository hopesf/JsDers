function xxx(data){
    var cevap = "";

    switch (data){
        case "bob":
            cevap = "Marley";
            break;
        case 42:
            cevap = "Cevap";
            break;
        case 1:
            cevap = "burasi 1.case";
            break;
        case 99:
            cevap = "cok yuksek";
            break;
        case 7:
            cevap = "biraz text";
            break;
    }
    return cevap;
}

// bu yapi switch case ile cok daha kolay ve okunabilir, if else yapisina her zaman bagli kalmamak gerek.

console.log(xxx(1));