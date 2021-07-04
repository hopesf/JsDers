var abc = 0;

function x(a){
    return a +5;    // bu fonksiyonda, hizli sekilde a degiskenine girilen degere +5 eklettiriyorum.
    //  return (a +10) / 2;    // bu aciklama satirinda, hizli sekilde a degiskenine girilen degere +10 ekletip, 2 ye bolduruyorum.
}

function y(){
    abc += 5;   // bu fonksiyon calismaz cunku fonksiyon icinde abc ye 5 ekledik ama disari return etmedik.
}

console.log(x(10));