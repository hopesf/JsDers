var arr=[8, 9, 10, 11];
var total= 0;

for (var i=0; i < arr.length; i++){
    total += +arr[i];                // arrayin lenght i kadar donecek ve yapacagi islem totallerini almak, yani 8+9+10+11 = sonuc 38
}

console.log(total);