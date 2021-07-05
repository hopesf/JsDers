function x(val){
    var sonuc = "";

    var kisiler = {
        ahmet : "Kural",
        murat : "Cemcir",
        ali : "Yildiz",
        ayse : "Bingol"
    };

    sonuc = kisiler[val];           // burda val yani fonksiyona girilen degeri aliyoruz, karsiligindaki kisinin soy ismini sonuc a aktariyoruz.
    console.log(sonuc);
    return sonuc;

}

x("ahmet");