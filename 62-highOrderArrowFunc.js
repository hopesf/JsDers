const db = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const calculate = (data) =>{
  const calcInt =  data.filter(                        // .filter ile db'deki pozitif "tam" sayilari bulduk.
      num => Number.isInteger(num) && num > 0          // filter'in icine arrow function yazip kolayca sorgu islemi yapabildik.
  ).map(                                               // .map fonksiyonu donen datayi, yani 4, 42, 6  bunlarin hepsini for gibi tek tek isleyecek.
    x => x *x                                          // bu satirda ise yaptirmak istedigim sey karesini almak. her elemani kendiyle carptiriyorum.
  );
  return calcInt;
};

const calcInt = calculate(db);
console.log(calcInt);