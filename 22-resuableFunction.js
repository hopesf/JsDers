function isim(){
    console.log('selim');
}

// fonksiyonlar birden fazla kez calistirilabilirler.

isim(); // 1. calistirma
isim(); // 2. calistirma
isim(); // 3. calistirma


//4 islem icin bir fonksiyon yazilabilir
function topla (a, b){console.log(a + b);}
function cikar (a, b){console.log(a - b);}
function carp (a, b){console.log(a * b);}
function bol (a, b){console.log(a / b);}

topla(10,8); // burada topla fonksiyonunu cagirip, a ve b nin parametrelerini atadik.
cikar(8,3); // burada cikarma fonksiyonunu cagirip, a ve b nin parametrelerini atadik.
carp(5,5); // burada carpma fonksiyonunu cagirip, a ve b nin parametrelerini atadik.
bol(14,2); // burada bolme fonksiyonunu cagirip, a ve b nin parametrelerini atadik.