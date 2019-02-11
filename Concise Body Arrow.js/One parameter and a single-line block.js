const plantNeedsWater = day => 
day==="Monday" ? true:false;
plantNeedsWater("Monday");
console.log(plantNeedsWater("Monday"));
//Prints: true

const plantNeedsWaterSecond = day => 
day==="Monday" ? true:false;
plantNeedsWaterSecond("Sunday");
console.log(plantNeedsWaterSecond("Sunday"));
//Prints: false
