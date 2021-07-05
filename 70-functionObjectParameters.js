const durum = {            // sallamasyon degerler olusturdum.
    max: 55.01,
    min: -0.90,
    mode: 23,
    avg: 35.33
};

const x = (function (){

    return function x({  max, min  }){               // simdi burda max ve min degerleri durum degiskeninden geliyor. hepsini cekmek istemedigimiz icin ihtiyacimiz olanlari cektik.
        return (max + min) / 2;                     // max ve min degerin toplaminin bolumunden kalaninida return ediyoruz.
    }

})();
console.log(durum);                             
console.log(x(durum));