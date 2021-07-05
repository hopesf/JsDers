var db = {
    2548:{
        "album": "slippery when wet",
        "artist": "bon jovi",
        "tracks": [
            "let it rock",
            "you give love a bad name"
        ]
    },
    2468:{
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "little red corvette"
        ]
    },
    1245:{
        "artist": "robert palmer",
        "tracks": [ ]
    },
    5439:{
        "album": "abba gold"
    }
};

var dbCopy = JSON.parse(JSON.stringify(db));

function updateRecords(id, prop, value){
    if (value === ""){                                 // buranin olayi update olacak id ve prop dogruysa ama deger "" ise update yapilacak datayi sildiriyoruz.
        delete db[id][prop];

    } else if (prop === "tracks"){                     // buranin olayida eger prop tracks girildiyse calisacak
        db[id][prop] = db[id][prop] || [];             // burda da girilen veri ayniysa bisey yaptirmiyoruz, farkliysa update olmaya calisan veriyi sildiriyoruz.
        db[id][prop].push(value);                      // burda da girilen yeni veri farkliysa update islemini gerceklestiriyoruz.
    } else{
        db[id][prop] = value;                          // burada ise prop tracks a esit degilse,veya valuesi bos degilse, gelen id prop ve valueyi yeni bir veri olarak eklettiriyoruz.
    }

    return db;
}
//console.log(updateRecords(2548, "tracks", "let it rocks"));

console.log(updateRecords(5439, "artist", "abba"));