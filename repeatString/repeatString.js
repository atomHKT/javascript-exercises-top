const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';

    let outStr = '';
    for (let i = 1; i <= num; i++ ) {
        outStr += str;
    }
    return outStr;
}

module.exports = repeatString
