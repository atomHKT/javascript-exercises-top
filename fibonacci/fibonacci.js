const fibonacci = function (val) {
    let i = 0,
        fibArr = [];
    if (val < 0 ) return "OOPS";
    do {
        if (i <= 1) {
            fibArr.push(1)
        } else {
            fibArr.push(fibArr[i - 1] + fibArr[i - 2])
        }
        i++;
    } while (i < val);
    return fibArr[i-1];
}

module.exports = fibonacci