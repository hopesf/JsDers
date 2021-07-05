const aylar = ["ocak", "subat", "mart", "nisan", "mayis", "haziran"];
let abc;
( function (){
 //   abc = aylar;              // burada spread operator olmadigi icin yani "..." direk birbirine esitliyor abc ve aylari, o yuzden asagidaki satirda degisiklik yaptigimda guncelliyor.
    abc = [...aylar];           // burada ... ile arrayden cikarmis oluyoruz ve abc ona esit olmuyor, kopyalamis oluyoruz bir nevi. yukaridaki kod'da direk esitliyordu.
    aylar[0] = "aralik";
})();

console.log(abc);