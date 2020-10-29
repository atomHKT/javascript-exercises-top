const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || (a < 0) || (b < 0)) {
        return "ERROR";
    }    
    let result = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        result += i;
    }
    return result;
}

module.exports = sumAll
