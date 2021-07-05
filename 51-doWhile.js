var myArray = [];

var i =10;

do{                          // do once bir kere bu islemi yap anlamina geliyor.
    myArray.push(i);                   // i nin o anki halini myArray degiskenine pushluyoruz.
    i++;                               // i yi bir arttiriyoruz. yani i=11 olacak
}while (i < 5)                        // 11 < 5 yani while dongumuz calismayacak birdaha.

console.log(i, myArray);