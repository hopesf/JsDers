function kelimeAtama(ad, soyad, adres, okul){
    var sonuc = "";
    sonuc += "Adim: " +ad  + "\nsoyadim: " + soyad + "\nadresim: "+ adres + "\nokul durumu: " + okul+ "\n";
    return sonuc; //fonksiyon datalarini return ile fonksiyon disina aktarmis olduk.
}

console.log(kelimeAtama('selim ', 'gecin ', 'ankara ', 'mezun'));
console.log(kelimeAtama('mahmut ', 'sever ', 'istanbul ', 'okuyor'));