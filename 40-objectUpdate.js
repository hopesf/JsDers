var galatasaray = {
    firstName : "AHmet",
    secondName : "Mehmet",
    lastName : "Ali",

};

var fenerbahce = {
    firstName : "kazim",
    secondName : "alex",
    lastName : "coder",
};

// 2 farkli takim belirledim


fenerbahce.lastName = "Easy JS!";       // fenerbahce takimindaki son oyuncunun ismini update yaptim.
fenerbahce["name"] = "Yeni transfer!";  // fenerbahce objesine yeni bir data ekledim.
delete galatasaray.lastName;            // galatasaraydaki ali oyuncusunun verisini sildim.