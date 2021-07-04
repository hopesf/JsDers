function a (value){
    if (value === 12){                  // === yapmamin sebebi sadece number degerleri almasi
        return 'sayilar esit!';
    }
    return 'esit degil!';
}

function b(x, y){    //ornek 2
    if (x === y){
        return "esit";
    }
    return "esit degil";
}

function c(value){    //ornek 3
    if (value !== 99){
        return "esit deger degil";
    }
    return "esit deger!";
}

function d(value){    //ornek 4
    if (value > 100){ return "100 den buyuk"; }  //else ve elseif kullanilabilir.
    if (value > 10){ return "10 dan buyuk"; }
    return "10 veya daha kucuk";
}

/*
* value >= 100
* value > 100
* value <= 100
* value < 100
* if(value <=100 && value >=50)       burda 2 tane sorgu yapabiliyoruz.
* && ve demek
* || veya demek
*
* */

console.log( a(12) );
console.log( b(20, 20) );// ornek 2
console.log( c(20) );// ornek 3
console.log( d(9) );// ornek 4