var a; //bunu direk boyle tanimlayip, sonradan istedigimiz yerde deger atamak icin kullanabiliriz.
var b= 3; // b nin degeri 3

console.log(a); // bu satirdan 1. satira kadar a tanimlamasini okumadigi icin null deger doner a nin degeri.

a = 9;  // a ya tanimlama yaptim.
b =a;  // b nin degeri 3 du. ama ben b nin degerini a ya esitledim. a nin degeri suan icin 9. yani sonuc olarak bana data 9 doner.

console.log(b); // sonuc 9