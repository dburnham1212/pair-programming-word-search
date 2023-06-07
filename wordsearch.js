const transpose = require("./transpose");

const wordSearch = (letters, word) => { 
    if(letters.length === 0){
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
        if (l.includes(word.split("").reverse().join(""))) return true;
    }
    let lettersTransposed = transpose(letters);
    const horizontalJoin2 = lettersTransposed.map(ls => ls.join(''))
    for (l of horizontalJoin2) {
        if (l.includes(word)) return true;
        if (l.includes(word.split("").reverse().join(""))) return true;
    }
    return false;
}

module.exports = wordSearch