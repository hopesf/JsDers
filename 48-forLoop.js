var myArray = [];
for (var i=1; i < 6; i++) { myArray.push(i); }

/* for'da while gibi bir dongudur, i yi tanimladik. 6 den buyuk olana kadar calistirdik, her seferinde bir arttirdik.
* not: <= yapmadigimiz icin 6 bu duruma dahil olmaz. i nin degeri ilk basta ne ise ordan baslar. ornegin sifir.
*/
console.log(myArray);

// 2. ornek

var otherArray =[];
for ( var x = 0; x < 14; x += 2){ otherArray.push(x); }
/*
* i her zaman birer birer artmak zorunda degil, bu ornekde ikiser ikiser olarak arttirdik.
* dongumuz 7 kere calisti bu durumda.
* */
console.log(otherArray);

// 3.ornek

var aArray =[];
for ( var z = 8; z > 0; z -= 2){ aArray.push(z); }
/*
* Bu ornekde ise for dongumuzu geriye dogru dondurduk. bu sekildede yapilabilir.
* */
console.log(aArray);