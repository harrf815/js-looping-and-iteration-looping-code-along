// Code your solutions in this file
function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

function writeCards(card) {
    let arr = []; 
    for (let i = 0; i < card.length; i++) {
        arr.push(`Thank you, ${card[i]}, for the wonderful surprise gift!`);
    }
    return arr;
}

