const data = {
    success: ["max-lenght", "no-amd", "prefer-arrow-func"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

// yukarda bazi bilgiler elde ettik.

function dataList(arr){                                                        // data.failure = arr
    const arrSonuc = [];

    for (let i=0; i < arr.length; i++){                                        // burda arr daki tum verilerin sayisi kadar for donduruyorum.
        arrSonuc.push(`<li class="text-warning"> ${arr[i]} </li>`);            // burdaki olay her donen for verisini, li tag'lerinin icinde yazdirmak.
    }

    return arrSonuc;
}

// bu ornek genellikle back-end ve front-end haberlesmelerinde kullaniliyor.

const arrSonuc = dataList(data.failure);                                       // fonksiyonun tam halini arrsonuc a aktariyorum.
console.log(arrSonuc);