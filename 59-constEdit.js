const veri = [1, 2, 3, 4];

function editData(){
    "use strict";

    // veri = [5, 6];           bu kod calismaz. veri'nin icini komple degistiremeyiz ama icindeki arrayleri degistirebiliriz.
    veri[0] = 2;
    veri[1] = 3;
    veri[2] = 4;
    veri[3] = 5;

}
editData();
console.log(veri);