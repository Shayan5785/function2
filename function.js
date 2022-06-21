// 1st function
    const isEven = num => num%2 == 0 ? true : false

// 2nd function
const findWhichEnd  = (word,letter) => {
    if(word.charAt() == "s" ){
        return "start"
    }
    if(word.slice(-1) == "k" ){
        return "end"
    }
    if(word.charAt() && word.slice(-1) == "t" ){
        return "both"
    }   else {
        return "neither"
    }
}

//3rd function
const countAbove = (number,limit) => {
    let i = 0 
    number.forEach(item => Math.abs(item) >= limit ? i++ : null)
    return i;
}

module.exports = {
    isEven,
    findWhichEnd,
    countAbove,
}