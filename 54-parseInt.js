function convert(x){  return parseInt(x); }                        // string gelen sayiyi, numara ya ceviriyoruz. yani int e
function convertBinary(y){  return parseInt(y, 2); }         // sadece binary islemlerle sinirladik ve 0 ve 1 rakamlarini kabul eder, aksi halde nan donecektir.
console.log(convert("99"));
console.log(convertBinary("10011"));