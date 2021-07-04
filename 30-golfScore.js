var siniflar = ["hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function skor(par, vuruslar){

    if(vuruslar === 1){
        return  siniflar[0]
    } else if(vuruslar <= par -2){
        return siniflar[1]
    } else if(vuruslar <= par -1){
        return siniflar[2]
    } else if(vuruslar <= par){
        return siniflar[3]
    } else if(vuruslar <= par +1){
        return siniflar[4]
    } else if(vuruslar <= par +2){
        return siniflar[5]
    } else if(vuruslar <= par +3){
        return siniflar[6]
    }

}

console.log(skor(5,4));
