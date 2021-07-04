var data = ["ali", "aysel", "mehmet"]; // ilk basta arrayimiz bu sekilde

data.push(["veysel", "ahmet"]);  // push komutuyla array'e ekleme yapabiliyoruz.
data.pop(); // arraydeki son elemani arrayden cikarir.
data.shift(); // arraydeki ilk elemani arrayden cikarir.
data.unshift("yeni-eleman"); // arraydeki [0], yani ilk eleman olarak veri eklemesi yapabiliyoruz.

console.log(data);