const data = () => new Date();  // bu yapi, kisa kodlarda fonksiyon olusturmakdan daha iyidir. ayni zamanda daha duzgun bir yapiya sahipdir.
// ornek

const deneme = (data1, data2) => data1.concat(data2);   // .concat, data1 e data2 yi eklememize, birlestirmemize yarar.
console.log(deneme([1,2], [3,4,5]));