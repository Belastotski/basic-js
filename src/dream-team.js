module.exports =
    function createDreamTeam( members ) {
 if (!Array.isArray(members)) return false
  let arr = members.filter(value => typeof value == 'string')
  if (!arr.length) return false
  return arr.map(value => value.trim()[0].toUpperCase() )
      .sort()
      .join('')
};
