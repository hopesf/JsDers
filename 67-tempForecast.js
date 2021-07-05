const gelenVeriler ={
  bugun: { min:20.5, max: 40 },                          // bu kismi veritabanindan gelen veriler olarak dusunuyorum.
  yarin: { min:24, max: 37.9 }
};

function maksimumYarin(sicaklik){
    "use strict";

    const {  yarin: { max: data }} = sicaklik;         // sicakligin icindeki, yarin'in icindeki, max degerine eristik. sonra data degiskenine atadik.
    return "yarin maksimum: "+ data +" derece!";      // burdada return ederken basit bir yazdirma isleminde bulundum.
}
console.log(maksimumYarin(gelenVeriler));             // burda ise fonksiyonuma veritabanimizdan gelen verileri bildiriyor ve log a basiyorum.