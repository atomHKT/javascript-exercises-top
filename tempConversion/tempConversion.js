const ftoc = function(farenheit) {
  return Number(((farenheit-32) * 5 / 9).toFixed(1));
}

const ctof = function(celsius) {
  return Number((32 + celsius * 9 / 5).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
