var db =[
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// yukarda bir database olusturdum.

var result  = db[1].list[2]; // db[1] trees verisini secer ve list deki son elemani, resut degiskenine atadim.
console.log(result);