module.exports = function createDreamTeam(members) {
  var coolSecretName = [];
  if (!members) return false;
  for (var i = 0; i <  members.length; i++) {
    if (typeof members[i] === 'string') {
      coolSecretName.push(members[i].trim()[0].toUpperCase())
    }
  }
  if (!coolSecretName.length) return false;
  return coolSecretName.sort().join('');
};