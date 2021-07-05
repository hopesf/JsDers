let data = { x:3.6, y:7.4, z: 6.54};
/*
let x = data.x; // x = 3.6
let y = data.y; // y = 7.4
let z = data.z; // z = 6.54

burasi eski yontem data binding.
*/

const {  x: a, y: b, z: c } = data;  // array icindeki tum veriler tek satirda a,b ve c degiskenlerine atandi.

// sicaklik ornegi asagidadir.




const ortSicakliklar ={                            // sicakliklari db den aldik.
    bugun: 38.1,
    yarin: 39
};

function yarininSicakligi(sicaklik){               // sicaklik degiskenine db sicakliklari geldi.
  "use strict";
  const {yarin: yarinsicaklk} = sicaklik;          // sicaklik degiskenin icindeki yarin datasini degiskene atadik.
  return yarinsicaklk;                             // fonksiyonu yarinin sicakligini bularak bitirdik.
}
console.log(yarininSicakligi(ortSicakliklar));     // bu kisimda db den aldigimiz sicakliklari fonksiyona bildiriyoruz.

// sonuc 39