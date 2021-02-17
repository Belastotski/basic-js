module.exports =
    class DepthCalculator {
  maxDepth = 1
  calculateDepth(arr,i=1) {
      i === 1 && (this.maxDepth = 1)
      arr.forEach(val => Array.isArray(val) && this.calculateDepth(val, i+1)  )
      return i > this.maxDepth? this.maxDepth = i: this.maxDepth
    }
};
