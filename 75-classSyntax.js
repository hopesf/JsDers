class gezegenler{
    constructor(hedefGezegen) {
        this.hedefGezegen = hedefGezegen;
    }
}
// es6 sayesinde class yapisinin javascriptde nasil calistigini ogrendik. reactden biraz konuya hakimim.

var x = new gezegenler("Mars");         //gezegenler classina yeni gezegen eklemis olduk ve asagidada konsola yazdirdik.
console.log(x.hedefGezegen);


//2. ornek

function abc(){

    class meyveler{                     // meyve sinifi olusturdum.
        constructor(adi) {
            this.adi = adi;             // burda bir bind islemi yaptik.
        }
    }

    return meyveler;
}
const meyveler = abc();
const yenimeyve = new meyveler('muz'); //yeni meyve ekledik, meyveler classina.
console.log(yenimeyve.adi);                // ekledigimiz meyveyi goruntuledik.