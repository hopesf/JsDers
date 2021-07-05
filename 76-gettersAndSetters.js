function makeClass(){
    class Termostat{
        constructor(temp) {
            this._temp = 5/9 * (temp -32);                // fahrenite dan derece ye cevirmek icin hesaplama islemi.
        }
        get sicakligiOlc(){                              // suanki sicaklik
            return this._temp;
        }
        set sicakligiOlc(yeniTemp){                      // yeni sicaklik guncellemesi
            this._temp = yeniTemp;
        }

    }
    return Termostat;
}

const Termostat = makeClass();
const termos = new Termostat(80);
let temp = termos.sicakligiOlc;
termos.sicakligiOlc = 30;
temp = termos.sicakligiOlc;

console.log(temp);                                 // sinifin sicakligini bulmus olduk.