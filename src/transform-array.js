module.exports =
    function transform(arr) {
      if (!Array.isArray(arr)) throw  new Error()
      let controls = {
        '--discard-next': (i, arr) => i !== arr.length - 1 && (arr[i + 1] = '--com'),
        '--discard-prev': (i, arr, res) => i && res.length && res.pop(),
        '--double-next': (i, arr, res) => i !== arr.length - 1 && res.push(arr[i + 1]),
        '--double-prev': (i, arr, res) => i && res.push(arr[i - 1])
      }
      return [...arr].reduce((res, val, i, arr) => {
        val in controls ? controls[val](i, arr, res) : res.push(val)
        return res
      }, []).filter(v => v !== '--com')
    };