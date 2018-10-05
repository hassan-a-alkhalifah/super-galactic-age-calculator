// Backend Logic
export function UserData() {
  this.age;
  this.weight;
  this.height;
  this.education;
  this.relationshipStatus;
  this.workingStatus;
  this.income;
  this.exercise;
  this.diet;
  this.alcohol;
  this.smoking;
}

UserData.prototype.getUserCurrentAge = function(year, month, day) {
  let birthDate = new Date(year, month, day);
  let birthDateMilliseconds = birthDate.getTime();
  let ageMilliseconds = Date.now() - birthDateMilliseconds;
  let millisecondsPerYear = 31536000000;
  this.age = parseFloat((ageMilliseconds/millisecondsPerYear).toFixed(2));
}
