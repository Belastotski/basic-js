module.exports =
class VigenereCipheringMachine {

  constructor(param= true) {
    this.param = param? val => val: val => val.split('').reverse().join('')  ;
  }

  paramCorrect(x,y) {if (!(x && y && x.length && y.length)) throw new Error() }

  isLatinLetter = symbol => symbol.toUpperCase().charCodeAt(0) > 64 && symbol.toUpperCase().charCodeAt(0) < 91

  encrypt(message, key) {
    this.paramCorrect(message, key)
    let j = 0;
    return this.param(message.toUpperCase()
        .split('')
        .map(value => this.isLatinLetter(value)?
            String.fromCharCode((value.charCodeAt(0) + key.toUpperCase().charCodeAt(j++ % key.length)) % 26 + 65)
            :value)
        .join(''))
  }
  decrypt(encryptedMessage,key) {
    this.paramCorrect(encryptedMessage, key)
    let j = 0;
    return this.param(encryptedMessage.toUpperCase().split('')
        .map(value => this.isLatinLetter(value)?
            String.fromCharCode((value.charCodeAt(0) +26 - key.toUpperCase().charCodeAt(j++ % key.length)) % 26 + 65):
            value).join(''))

  }
}

