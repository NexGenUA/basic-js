class VigenereCipheringMachine {
  
  constructor(reverse = true) {
    this.reverse = !reverse;
  }

  encrypt(str, codePhrase) {
    
    if (!str || !codePhrase) throw new Error;

    let offset = 0;
    let result = "";
    
    codePhrase = codePhrase.repeat(Math.ceil(str.length / codePhrase.length));

    for (let i = 0; i < str.length; i++) {
    
      const char = this.getChar(str[i], codePhrase[i - offset], '+');
    
      if (!/[a-z]/ig.test(char)) offset++;
    
      result += char;
    
    }

    result = this.reverse ? [...result].reverse().join('') : result;

    return result;
  }

  decrypt(str, codePhrase) {

    if (!str || !codePhrase) throw new Error;

    let offset = 0;
    let result = "";

    codePhrase = codePhrase.repeat(Math.ceil(str.length / codePhrase.length));

    for (let i = 0; i < str.length; i++) {
      
      const char = this.getChar(str[i], codePhrase[i - offset]);

      if (!/[a-z]/ig.test(char)) offset++;

      result += char;

    }

    result = this.reverse ? [...result].reverse().join('') : result;

    return result;
  }

  getChar(x, y, operator) {

    const strChar = x.toUpperCase().codePointAt(0) - 65;
    const codePhraseChar = y.toUpperCase().codePointAt(0) - 65;

    if (strChar < 0 || strChar > 25) return x.toUpperCase();

    let code = operator === '+' ? strChar + codePhraseChar : strChar - codePhraseChar;

    code = code > 25 ? code - 26 : code < 0 ? code + 26 : code;
    
    return String.fromCodePoint(code + 65);
  }
}

module.exports = VigenereCipheringMachine;
