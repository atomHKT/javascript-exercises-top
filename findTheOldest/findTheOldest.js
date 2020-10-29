const findTheOldest = function (arr) {
    arr.forEach(obj => {
        ('yearOfDeath' in obj) ?
        obj['yearLived'] = obj.yearOfDeath - obj.yearOfBirth:
            obj['yearLived'] = (new Date()).getFullYear() - obj.yearOfBirth
    });
    return arr.reduce((prev, current) =>
        (prev.yearLived > current.yearLived) ? prev : current, {});
}

module.exports = findTheOldest