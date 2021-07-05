var obj ={
  a : 1,
  b : 2,
  c : 3
};

// yukarda obje tanimlamasi yaptim.

function checkObj(prop){
    if (obj.hasOwnProperty(prop)){    // objemizde girilen a degeri varmi diye kontrol ettiriyoruz.
        return obj[prop];
    }
    return "objede bu deger yok!";
}

console.log(checkObj("a"));