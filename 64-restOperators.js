const sayiTopla = ( () =>{
   return function sayiTopla(...args){                  // suan buranin sonucu girilen veriler 3, 4, 5 ama uc nokta koymasaydim o zaman array olarak donecekti. []
       return args.reduce( (a,b) => a + b, 0);          // burda bir callback arrow function yaziyoruz ve girilen tum degerleri toplatiyoruz.
    };
})();
console.log(sayiTopla(3, 4, 5));