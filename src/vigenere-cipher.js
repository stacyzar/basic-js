class VigenereCipheringMachine {
  constructor(direct) {
      this.line = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.n = this.line.length;
      this.isRev = !(direct === true || direct === undefined);
  }

  // преобразует 1 символ сообщения в 1 символ закодированного по индексу
  coder(mes, key, index, kId) {
      return this.line[(this.line.indexOf(mes[index]) + this.line.indexOf(key[kId % key.length])) % this.n];
  }

  decoder(coded, key, index, kId) {
      return this.line[(this.line.indexOf(coded[index]) + this.n - this.line.indexOf(key[kId % key.length])) % this.n];
  }

  reverse(str) {
      return str.split('').reverse().join('');
  }
  
  encrypt(mes, key) {
      if (mes === undefined || key === undefined) throw new Error ('oooops!');
      let coded = '';
      let j = 0;
      for (let i = 0; i < mes.length; i++) {
          if (this.line.includes(mes.toUpperCase()[i])) {
              coded += this.coder(mes.toUpperCase(), key.toUpperCase(), i, j);
              j++;
          } else {
              coded += mes[i];
          }
      };
      return this.isRev ? this.reverse(coded) : coded;
  }
 
  decrypt(coded, key) {
      if (coded === undefined || key === undefined) throw new Error ('oooops!');
      let decoded = '';
      let j = 0;
      for (let i = 0; i < coded.length; i++) {
          if (this.line.includes(coded[i])) {
              decoded += this.decoder(coded, key.toUpperCase(), i, j);
              j++;
          } else {
              decoded += coded[i];
          }
      };
      return this.isRev ? this.reverse(decoded) : decoded;
  }
}

module.exports = VigenereCipheringMachine;
