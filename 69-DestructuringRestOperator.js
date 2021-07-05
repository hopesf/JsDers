const veri = [1,2,3,4,5,6,7,8,9,10];            // db den gelen veriler.

function ilkIkiVeriyiSil(data){                 // veri = data
    const [ , ,...sil] = data;                  // iki adet virgul ile, gelen ilk iki veriyi gormezden geldik. 3 adet nokta ile de, veriyi array ifadeden cikardik.
    return sil;
}
const sil = ilkIkiVeriyiSil(veri);
console.log(sil);
console.log(veri);