function hepsinicarp(arr){
    var sonuc = 1;

    for(var i=0; i < arr.length; i++){                // i yi gelen datanin length i kadar dondurduk.

        for (var x =0; x < arr[i].length; x++){       // array icinde array oldugu icin i o anda hangi elemani kontrol ediyorsa ornegin [1,2] olani etsin.
            sonuc *= arr[i][x];                       // bu arrayinde icine girmek icin tekrar for actik.
        }
    }

    return sonuc;
}

var sonuc = hepsinicarp([ [1,2], [3,4], [5,6,7] ]);         // elimizde bu sekilde arrayler var ve hepsini birbiriyle carptirmamiz gerekiyor.

/*
* burda sonuc degiskenine
* */

console.log(sonuc);