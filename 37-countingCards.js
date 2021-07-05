var count = 0;

function cc(card){
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "hold";

    if (count >0){
        holdbet = "bet"
    }

    return count + " " + holdbet;
}

// bunun hepsini anladim ama oyunu bilmiyorum fazla o yuzden pek yorum yapmayacagim.

cc(2); cc("K"); cc(10); cc("K"); cc("A");

console.log(cc(4));