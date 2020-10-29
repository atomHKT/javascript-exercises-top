const removeFromArray = function(array, ...filtValues) {
    return array.filter(val => (!filtValues.includes(val)));
}
module.exports = removeFromArray
