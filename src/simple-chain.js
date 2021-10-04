import { NotImplementedError } from '../extensions/index.js';

export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(n) {
    n !== undefined ? this.chain.push('( ' + n + ' )') : this.chain.push('( )');
    return this;
  },
  removeLink(n) {
    if (Number.isInteger(n) && n - 1 >= 0 && n - 1 < this.chain.length) {
      this.chain.splice(n - 1, 1);
    } else {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};
