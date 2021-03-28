const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj={}
  obj.turns=2**disksNumber - 1;
  obj.seconds=parseInt((obj.turns/turnsSpeed)*3600);
  return obj;
};
