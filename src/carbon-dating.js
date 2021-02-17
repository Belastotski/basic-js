const MODERN_ACTIVITY= 15
const HALF_LIFE_PERIOD= 5730

module.exports =
    function dateSample(sampleActivity) {
      if (typeof sampleActivity !== 'string' ) return false
  let val = Number(sampleActivity)
  if (val === NaN || val > 15 || val <= 0) return false
  let res = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD/0.693)
  return res || false
}


