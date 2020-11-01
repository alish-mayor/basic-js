const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(!(Array.isArray(arr))){
    throw new CustomError("invalid argument");
  }

  if(arr.length === 0){
    return arr;
  }

  arr.forEach(element =>{
    if (typeof element === "string"){
      switch(element){
        case "--discard-next":
          return discardNext(arr);
        case "--discard-prev":
          return discardPrev(arr);
        case "--double-next":
          return doubleNext(arr);
        case "--double-prev":
          return doublePrev(arr);
      }
    } else {
      return arr;
    }
  });

  

};




function checkArrAndDeleteOther(arr){
  
}