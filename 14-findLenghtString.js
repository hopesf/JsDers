var a = 0, b="";
var y, x, z;
var yanlisData = "kerhaba";
var lastName = "Code Master";

yanlisData = "Merhaba"; // name2 deki mantikla bu degeri degistiremeyiz. eger sorun varsa datada, cozmek icin tekrardan bir atama yapariz.

a = lastName.length; // yazdigimiz kelimelerin lenght sayesinde, toplam kac harf oldugunu buluyoruz. (boslukda harf olarak sayilir!)
b = lastName[0]; // name2 degiskeninin icindeki ilk string harfi bulmamizi saglar.
x = lastName[2]; // isim degiskenindeki mahmut ' un 3. harfini bulmamizi saglar.
y = lastName[lastName.length -1]; // lastname degiskenindeki Code Master'in son harfini bulmamizi saglar.
z = lastName[lastName.length -3]; // lastname degiskenindeki Code Master'in sondan 3. harfini bulmamizi saglar.

console.log(a, b, yanlisData, x, y, z);
