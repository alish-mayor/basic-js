const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members === null || members === undefined){
    return false
  } else {
  
  let dreamTeam = []

  for(let i = 0; i < members.length; i++){   
      if (typeof(members[i]) === "string") {
      let member = members[i]
      let memberLetter = member.trim().toUpperCase().substr(0,1)
      dreamTeam.push(memberLetter)
      }
  }
  
  return dreamTeam.sort().join("")
}
};
