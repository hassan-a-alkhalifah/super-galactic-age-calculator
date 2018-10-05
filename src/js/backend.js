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
  this.age = (ageMilliseconds/millisecondsPerYear).toFixed(2);
}

UserData.prototype.getUserVariousPlanetAge = function() {
  this.MercuryAge = (this.age / .24).toFixed(2);
  this.VenusAge = (this.age / .62).toFixed(2);
  this.MarsAge = (this.age / 1.88).toFixed(2);
  this.JupiterAge = (this.age / 11.86).toFixed(2);
}
