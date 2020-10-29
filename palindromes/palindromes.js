const palindromes = function (str) {
    return str.replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase().split('')
        .every((elem, index, arr) => {
            return arr[index] === arr[arr.length - 1 - index];
        });
}

module.exports = palindromes