import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  const controller = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (controller.indexOf(arr[i])) {
      case -1:
        result.push(arr[i]);
        break;
      case 0:
        i++;
        break;
      case 1:
        if (arr[i - 2] === controller[0]) {
          break;
        }
        result.pop();
        break;
      case 2:
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;
      case 3:
        if (arr[i - 2] === controller[0]) {
          break;
        }
        if (result.length - 1 >= 0) {
          result.push(arr[i - 1]);
          break;
        }
    }
  }
  return result;
}
