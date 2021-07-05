function x (a,b){
  if (a < 0 || b < 0){
    return undefined;                   // a veya b  0 dan kucukse undefined dondurduk.
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)); // random sayi

}

console.log(x(-2,2));         // eksili bir sayi verdigimde ikisinden birine sonuc undefined donecektir.