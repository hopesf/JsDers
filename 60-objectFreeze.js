function freeze(){
    "use strict";

    const PI_DEGERI = {
        PI:3.14
    };

    Object.freeze(PI_DEGERI);   // eger bu kilidi koymazsam yani bu kodu, pi nin degeri 10 olur. Ama freeze ile dondurdugum icin kilitli bir degisken olarak dusunebiliriz.

    try{
        PI_DEGERI.PI = 10;
    }catch ( ex ){
        console.log(ex);
    }
    return PI_DEGERI.PI;
}

const PI = freeze();
console.log(PI);