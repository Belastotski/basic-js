const chainMaker = {
  values: [],
  getLength() {
    this.values.length
  },
  addLink(value) {
    this.values.push(arguments.length? String(value): ' ')
    return this
  },
  removeLink(position) {
    if (position < 0) {
      this.values = []
      throw new Error()
    }
   try {
      this.values.splice(position-1,1)
   }catch (e) {
      this.values = []
     throw new Error(e)
   }
    return this
  },
  reverseChain() {
    this.values.reverse()
    return this
  },
  finishChain() {
    let res =`( ${this.values.join( ' )~~( ' )} )`;
    this.values = []
    return res
  }
};

module.exports = chainMaker;
