const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr) === false) {
    throw new Error();
  }
  
  let rules = new RegExp(/--discard-next|--discard-prev|--double-next|--double-prev/);
  
  if (arr.length === 0 || !rules.test(arr)) {
    return arr;
  }
  
  let modifiedArr = [];
  
  for (let i = 0; i < arr.length; i++) {

		switch (arr[i]) {
			case '--discard-next': i = i + 1;
				break;

			case '--discard-prev':
				if (arr[i - 1] != undefined && arr[i - 2] != '--discard-next') {
					modifiedArr.pop();
				}
				break;

			case '--double-next':
				if (arr[i + 1] != undefined) {
					modifiedArr.push(arr[i + 1]);
				}
				break;

			case '--double-prev':
				if (arr[i - 1] != undefined && arr[i - 2] != '--discard-next') {
					modifiedArr.push(arr[i - 1]);
				}
				break;

			default: modifiedArr.push(arr[i]);
		}
	}

	return modifiedArr; 
};
