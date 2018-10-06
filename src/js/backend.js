// Backend Logic
export function UserData() {
  this.age;
  this.sex;
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
};

UserData.prototype.getUserVariousPlanetAge = function() {
  this.mercuryAge = parseFloat((this.age / .24).toFixed(2));
  this.venusAge = parseFloat((this.age / .62).toFixed(2));
  this.marsAge = parseFloat((this.age / 1.88).toFixed(2));
  this.jupiterAge = parseFloat((this.age / 11.86).toFixed(2));
};

UserData.prototype.getWeightType = function() {
  let BMI = (this.weight * 0.45)/((this.height * 0.025)*(this.height * 0.025));
  if(BMI < 18.5) {
    return "1";
  } else if(BMI >= 18.5 && BMI <= 24.9) {
    return "2";
  } else if(BMI >= 25 && BMI <= 29.9) {
    return "3";
  } else {
    return "4";
  }
};

UserData.prototype.getYearsLeftToLiverPerPlanet = function() {
  let weightType = this.getWeightType();
  let averageLifeExpectancy = this.sex;
  if(weightType == "1" || weightType == "3") {
    averageLifeExpectancy -= 5;
  } else if(weightType == "4") {
    averageLifeExpectancy -= 20;
  }
  if(this.education == "1") {
    averageLifeExpectancy -= 1;
  } else if(this.education == "3") {
    averageLifeExpectancy += 1;
  } else if(this.education == "4") {
    averageLifeExpectancy += 2;
  }
  if(this.relationshipStatus == "2") {
    averageLifeExpectancy += 2;
  } else if(this.relationshipStatus == "3") {
    averageLifeExpectancy -= 2;
  } else if(this.relationshipStatus == "4") {
    averageLifeExpectancy -= 1;
  }
  if(this.workingStatus == "1") {
    averageLifeExpectancy += 2;
  } else if(this.workingStatus == "2") {
    averageLifeExpectancy += 1;
  } else if(this.workingStatus == "4") {
    averageLifeExpectancy -= 2;
  }
  if(this.income == "1" || this.income == "3") {
    averageLifeExpectancy += 1;
  } else if(this.income == "4") {
    averageLifeExpectancy += 2;
  }
  if(this.exercise == "1") {
    averageLifeExpectancy -= 5;
  } else if(this.exercise == "2") {
    averageLifeExpectancy += 1;
  } else if(this.exercise == "3") {
    averageLifeExpectancy += 2;
  } else {
    averageLifeExpectancy += 4;
  }
  if(this.diet == "1") {
    averageLifeExpectancy -= 5;
  } else if(this.diet == "3") {
    averageLifeExpectancy += 1;
  } else if(this.diet == "4") {
    averageLifeExpectancy += 2;
  } else if(this.diet == "5") {
    averageLifeExpectancy += 4;
  }
  if(this.alcohol == "1") {
    averageLifeExpectancy += 1;
  } else if(this.alcohol == "3") {
    averageLifeExpectancy -= 2;
  } else if(this.alcohol == "4") {
    averageLifeExpectancy -= 4;
  }
  if(this.smoking == "1") {
    averageLifeExpectancy += 1;
  } else if(this.smoking == "2") {
    averageLifeExpectancy -= 1;
  } else {
    averageLifeExpectancy -= 2;
  }
  this.expectedAgeOfDeathOnEarth = parseFloat((averageLifeExpectancy).toFixed(2));
  this.expectedAgeOfDeathOnMercury = parseFloat(((averageLifeExpectancy / .24)).toFixed(2));
  this.expectedAgeOfDeathOnVenus = parseFloat(((averageLifeExpectancy / .62)).toFixed(2));
  this.expectedAgeOfDeathOnMars = parseFloat(((averageLifeExpectancy / 1.88)).toFixed(2));
  this.expectedAgeOfDeathOnJupiter = parseFloat(((averageLifeExpectancy / 11.86)).toFixed(2));
};

UserData.prototype.getYearsLivedAfterLifeExpectancyPerPlanet = function() {
  this.yearsLivedAfterExpectedAgeOfDeathOnEarth = (this.age - this.expectedAgeOfDeathOnEarth).toFixed(2);

  this.yearsLivedAfterExpectedAgeOfDeathOnMercury = (this.mercuryAge - this.expectedAgeOfDeathOnMercury).toFixed(2);

  this.yearsLivedAfterExpectedAgeOfDeathOnVenus = (this.venusAge - this.expectedAgeOfDeathOnVenus).toFixed(2);

  this.yearsLivedAfterExpectedAgeOfDeathOnMars = (this.marsAge - this.expectedAgeOfDeathOnMars).toFixed(2);

  this.yearsLivedAfterExpectedAgeOfDeathOnJupiter = (this.jupiterAge - this.expectedAgeOfDeathOnJupiter).toFixed(2);
};
