// Function that apply rot on a single caracter
// Ascii range value for Uppercases is [65-90]
// Ascii range value for Lowercases is [97-122]
const singleCaesar = function (char, rot) {
    const charVal = char.charCodeAt(0);
    // To handle negative rot
    const rotMod = rot => ((rot < 0) ? (rot + 26) % 26 : rot % 26);
    // To determine upper limit
    const charLimit = char => (char <= 90) ? 90 : 122;
    return (charVal + rotMod(rot) <= charLimit(charVal)) ?
        String.fromCharCode(charVal + rotMod(rot)) :
        String.fromCharCode(charVal + rotMod(rot) - 26)
}

const caesar = function (str, rot) {
    return str.replace(/[a-zA-Z]/g, match => singleCaesar(match, rot));
}

module.exports = caesar
