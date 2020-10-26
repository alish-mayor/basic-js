const CustomError = require("../extensions/custom-error");



module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let turns = 2**disksNumber - 1
  let turnsInSecond = turnsSpeed / 3600
  let seconds = Math.floor(turns / turnsInSecond)
  return {turns, seconds}
};
