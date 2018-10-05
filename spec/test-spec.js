import { UserData } from "./../src/js/backend.js";

describe("UserData", function() {

  let newUser;

  beforeEach(function() {
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
    }
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
    }
    newUser = new UserData();
    newUser.weight = 195;
    newUser.height = 70;
    newUser.age = 100;
    newUser.mercuryAge = 416.67;
    newUser.venusAge = 161.29;
    newUser.marsAge = 53.19;
    newUser.jupiterAge = 8.43;
    newUser.sex = 83;
    newUser.education = "2";
    newUser.relationshipStatus = "2";
    newUser.workingStatus = "2";
    newUser.income = "1";
    newUser.exercise = "4";
    newUser.diet = "5";
    newUser.alcohol = "1";
    newUser.smoking = "1";
  });

  it("Store user input in new object based on key value pairs or constructor UserData", function() {
    let newUser = new UserData();
    newUser.age = 30;
    newUser.sex = 83;
    newUser.weight = 195;
    newUser.height = 70;
    newUser.education = "2";
    newUser.relationshipStatus = "2";
    newUser.workingStatus = "2";
    newUser.income = "1";
    newUser.exercise = "4";
    newUser.diet = "5";
    newUser.alcohol = "1";
    newUser.smoking = "1";
    expect(newUser.age).toEqual(30);
    expect(newUser.sex).toEqual(83);
    expect(newUser.weight).toEqual(195);
    expect(newUser.height).toEqual(70);
    expect(newUser.education).toEqual("2");
    expect(newUser.relationshipStatus).toEqual("2");
    expect(newUser.workingStatus).toEqual("2");
    expect(newUser.income).toEqual("1");
    expect(newUser.exercise).toEqual("4");
    expect(newUser.diet).toEqual("5");
    expect(newUser.alcohol).toEqual("1");
    expect(newUser.smoking).toEqual("1");
  });

  it("Get users current date of birth, i.e month, day and year, to calculate user's current age", function() {
    UserData.prototype.getUserCurrentAge = function(year, month, day) {
      let birthDate = new Date(year, month, day);
      let birthDateMilliseconds = birthDate.getTime();
      let ageMilliseconds = Date.now() - birthDateMilliseconds;
      let millisecondsPerYear = 31536000000;
      this.age = (ageMilliseconds/millisecondsPerYear).toFixed(2);
    }
    let newUser = new UserData();
    newUser.getUserCurrentAge(1987, 12, 16);
    expect(newUser.age).toEqual("30.74");
  });

  it("Convert users Earth age into Mercury, Venus, Mars and Jupiter years", function() {
    UserData.prototype.getUserVariousPlanetAge = function() {
      this.mercuryAge = parseFloat((this.age / .24).toFixed(2));
      this.venusAge = parseFloat((this.age / .62).toFixed(2));
      this.marsAge = parseFloat((this.age / 1.88).toFixed(2));
      this.jupiterAge = parseFloat((this.age / 11.86).toFixed(2));
    }
    let newUser = new UserData();
    newUser.age = 30.74;
    newUser.getUserVariousPlanetAge();
    expect(newUser.mercuryAge).toEqual(128.08);
    expect(newUser.venusAge).toEqual(49.58);
    expect(newUser.marsAge).toEqual(16.35);
    expect(newUser.jupiterAge).toEqual(2.59);
  });

  it("Determine users weight type", function() {
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
    }
    let newUser = new UserData();
    newUser.weight = 195;
    newUser.height = 70;
    let BMI = newUser.getWeightType();
    expect(BMI).toEqual("3");
  });

  it("Determine how many years a user has left to live on each planet", function() {


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

      newUser.expectedAgeOfDeathOnEarth = parseFloat((averageLifeExpectancy).toFixed(2));
      newUser.expectedAgeOfDeathOnMercury = parseFloat(((averageLifeExpectancy / .24)).toFixed(2));
      newUser.expectedAgeOfDeathOnVenus = parseFloat(((averageLifeExpectancy / .62)).toFixed(2));
      newUser.expectedAgeOfDeathOnMars = parseFloat(((averageLifeExpectancy / 1.88)).toFixed(2));
      newUser.expectedAgeOfDeathOnJupiter = parseFloat(((averageLifeExpectancy / 11.86)).toFixed(2));
    }
    newUser.age = 30.74;
    newUser.mercuryAge = 128.08;
    newUser.venusAge = 49.58;
    newUser.marsAge = 16.35;
    newUser.jupiterAge = 2.59;
    newUser.sex = 83;
    newUser.education = "2";
    newUser.relationshipStatus = "2";
    newUser.workingStatus = "2";
    newUser.income = "1";
    newUser.exercise = "4";
    newUser.diet = "5";
    newUser.alcohol = "1";
    newUser.smoking = "1";
    newUser.getYearsLeftToLiverPerPlanet();
    expect(newUser.expectedAgeOfDeathOnEarth).toEqual(92.00);
    expect(newUser.expectedAgeOfDeathOnMercury).toEqual(383.33);
    expect(newUser.expectedAgeOfDeathOnVenus).toEqual(148.39);
    expect(newUser.expectedAgeOfDeathOnMars).toEqual(48.94);
    expect(newUser.expectedAgeOfDeathOnJupiter).toEqual(7.76);
  });

  it("If user lives after life expectancy, get years lived after life expectancy per planet ", function() {
    let test;
    UserData.prototype.getYearsLivedAfterLifeExpectancyPerPlanet = function() {
      if(this.age > this.expectedAgeOfDeathOnEarth) {
        this.yearsLivedAfterExpectedAgeOfDeathOnEarth = (this.age - this.expectedAgeOfDeathOnEarth).toFixed(2);

        this.yearsLivedAfterExpectedAgeOfDeathOnMercury = (this.mercuryAge - this.expectedAgeOfDeathOnMercury).toFixed(2);

        this.yearsLivedAfterExpectedAgeOfDeathOnVenus = (this.venusAge - this.expectedAgeOfDeathOnVenus).toFixed(2);

        this.yearsLivedAfterExpectedAgeOfDeathOnMars = (this.marsAge - this.expectedAgeOfDeathOnMars).toFixed(2);

        this.yearsLivedAfterExpectedAgeOfDeathOnJupiter = (this.jupiterAge - this.expectedAgeOfDeathOnJupiter).toFixed(2);
      }
    }
    newUser.getWeightType();
    newUser.getYearsLeftToLiverPerPlanet();
    newUser.getYearsLivedAfterLifeExpectancyPerPlanet();
    expect(newUser.yearsLivedAfterExpectedAgeOfDeathOnEarth).toEqual("8.00");
    expect(newUser.yearsLivedAfterExpectedAgeOfDeathOnMercury).toEqual("33.34");
    expect(newUser.yearsLivedAfterExpectedAgeOfDeathOnVenus).toEqual("12.90");
    expect(newUser.yearsLivedAfterExpectedAgeOfDeathOnMars).toEqual("4.25");
    expect(newUser.yearsLivedAfterExpectedAgeOfDeathOnJupiter).toEqual("0.67");
  });

});
