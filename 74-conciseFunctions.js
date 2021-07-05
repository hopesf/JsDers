const bisiklet ={                         // bisiklet bilgileri olusturduk.
    vites: 2,                             // suanda vites 2
    setVites(yeniVites){                  // burda array icinde fonksiyon yazdik.
        'use strict';
        this.vites = yeniVites;           // vitesi guncelledik
    }
};
bisiklet.setVites(4);                     // fonksiyona yeni vitesi belirledik.
console.log(bisiklet.vites);              // ekranda gosterdik.