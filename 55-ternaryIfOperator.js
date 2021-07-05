function check(x, y){
    return x === y ? "dogru" : "yanlis";  // burda ? ise demek sonra true oldugunda yapilacak sey "bir aciklama olabilir", yanlis oldugunda ise : dan sonra devam edilir.
//  return x === y;                   // bu kod yukardakiyle tamamen ayni seyi yapar, yukarda biraz suslemek istedim sadece.
}
console.log(check(1,2));


// 2. ornek

function posNeg(number){
    return number > 0 ? "pozitif sayi" : number < 0 ? "negatif sayi" : "sifir";
}
console.log(posNeg(-5));