var iletisim = [

    {
        "ad": "selim",
        "soyad": "coder",
        "numara": "1234567891",
        "sevdikleri": ["pizza", "javascript", "Gitar calmak"]
    },

    {
        "ad": "ahmet",
        "soyad": "kural",
        "numara": "9876543221",
        "sevdikleri": ["pizza", "oyuncu", "yemek yemek"]
    }
];

function ara(name, prop){                                // name ve prop a aktarmis oluyoruz.
    for (var i =0; i < iletisim.length; i++){            // iletisimin lenght i kadar donguye sokuyoruz.
        if (iletisim[i].ad === name){                    // o anki dongudeki ad, belirlenen datalarla esitse if yapisi calisacak
            return iletisim[i][prop] || "boyle bir bilgisi yok";
        }

    }
    return 'kisi bulunamadi!';                          // aksi halde burasi calisacak.
}
var search = ara('ahmet',"x");           //datalari burdan belirliyoruz.
console.log(search);