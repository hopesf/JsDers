function randomOndalik(){  return Math.random(); }            // 0 ile 1 arasinda rasgele sayi olusturur, ama asla 1 olamaz.
console.log(randomOndalik());

// ornek 2
function randomTam(){  return Math.floor(Math.random() * 11)  }              // rasgele 1-10 arasi bir sayi olusturacak.     Math.floor komutu, tam sayiya yuvarlar.
console.log(randomTam());