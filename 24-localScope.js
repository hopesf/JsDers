function deneme(){
    var data = 8;
    console.log(data);
}

deneme(); // yazdigimiz fonksiyonun icindekiler calisacak ve sonuc 8 donecek.

console.log(data); // bu kod calismaz cunku data degiskenini fonksiyonun icinde tanimladik, data global bir degisken degil.
