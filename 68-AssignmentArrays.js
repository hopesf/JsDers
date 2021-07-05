const [a, b, ,c] = [1, 2, 3, 4, 5, 6, 7, 8];  //  , ,   degiskene isim vermeden virgul ile devam edersem arraydeki 4 sayisina erisebilirim.
console.log(a, b, c);

//2.ornek
let z = 10, x = 7;
(()=>{
   "use strict";
   [z, x] = [x,z];           // z ve x in yerlerini degistirdik.
})();
console.log(z, x);          // z artik 7 degerine sahip, x ise 10 degerine sahip. yani z=7; x=10;