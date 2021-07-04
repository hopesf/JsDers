var sonuc = "pantolon";  // global olarak sonuc degiskeni pantolon olarak tanimli.

function deneme(){
    var sonuc = "ayakkabi"; // local olarak yani sadece fonksiyon yapisi icin sonuc degiskeninin degerini ayakkabi olarak tanimladim.
    return sonuc;           // sonuc degiskenini disari aktariyorum.
}

console.log(deneme()); //fonksiyonu calistirtip, konsola yazdiriyorum.
console.log(sonuc);   //fonksiyonun kismi calismadan global sonuc degiskenindeki degeri alabiliyorum.