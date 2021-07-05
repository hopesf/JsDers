var myArray = [];

var i =0;

while (i < 5){                          // while bir dongudur ve i degiskeni, 5 den buyuk olana kadar calisacak suanda.
    myArray.push(i);                   // her seferinde i nin o anki halini myArray degiskenine pushluyoruz.
    i++;                               // i 5 den buyuk olana kadar her dongude i yi bir arttiriyoruz.
}

console.log(myArray);