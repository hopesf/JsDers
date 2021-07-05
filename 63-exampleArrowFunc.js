const incr = ( () =>{
    return function incr(num, val = 1){                        // burada val degerine default bir atama yaptik. eger bir veri gelmezse 1 olacak.
      return num + val;
    };
})();                                                                 // fonksiyonun calismasi icin, islemin sonuna () direk boyle koyabiliyorum.
console.log(incr(6,2));
console.log(incr(4));                                            // val in defaul degeri 1 oldugu icin 4+1 = 5 olacak.
