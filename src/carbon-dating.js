const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(typeof(sampleActivity) === 'string' && sampleActivity.match(/\d\./) && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15){
        sampleActivity = parseFloat(sampleActivity)
        let lnTwo = 0.693
        let k = lnTwo / HALF_LIFE_PERIOD
        let lnActivity = Math.expm1((MODERN_ACTIVITY/sampleActivity) / 10)
        return lnActivity / k
    } else {
        return false
    }

    
};
