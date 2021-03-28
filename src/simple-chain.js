const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return Math.ceil(this.chain.length / 2);
  },
  addLink(value) {
    this.getLength() != 0? this.chain.push('~~') : null
    this.chain.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    if(position < 1 || position > this.getLength() || !Number.isInteger(position)){ this.chain.length = 0; throw new Error('');}
      let index = 1;
      for(let i = 1; i < position; i++)
        index+=2;
      this.chain.splice(index-1, 2);
      return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let string = this.chain.join('');
    this.chain.length = 0;
    return string;
  }
};


module.exports = chainMaker;
