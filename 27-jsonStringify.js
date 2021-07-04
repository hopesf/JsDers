function a(add, data){
    add.push(data);       // datadan girdigim 6 degerini, push ile db degiskenine ekliyorum.
    return add.shift();   // db deki ilk elemani kaldirdik.
}

var db = [1, 2, 3, 4, 5];

console.log("once: " + JSON.stringify(db));// db degiskenindeki arrayleri, array olarak almamizi saglar. stringify la donusturmezsek sonuc 1, 2, 3, 4, 5 olur.
console.log(  a(db, 6)  );            // a fonksiyonunda add callbackine db yi eslestirdik ve data degerinede 6 degerini verdik.
console.log("sonra: " + JSON.stringify(db));   // sonuc 2, 3, 4, 5, 6 olur.
