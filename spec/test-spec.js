import  UserData  from "./../src/js/UserData.js";
describe("UserData", function() {
  it("Store user input in new object based on key value pairs or constructor UserData", function() {
    const sex = 83;
    const weight = 195;
    const height = 70;
    const education = "2";
    const relationshipStatus = "2";
    const workingStatus = "2";
    const income = "1";
    const exercise = "4";
    const diet = "5";
    const alcohol = "1";
    const smoking = "1";
    const newUser = new UserData(sex, weight, height, education, relationshipStatus, workingStatus, income, exercise, diet, alcohol, smoking);
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
      const birthDate = new Date(year, month, day);
      const birthDateMilliseconds = birthDate.getTime();
      const ageMilliseconds = Date.now() - birthDateMilliseconds;
      const millisecondsPerYear = 31536000000;
      this.age = (ageMilliseconds/millisecondsPerYear).toFixed(2);
    }
    const newUser = new UserData();
    newUser.getUserCurrentAge(1987, 12, 16);
    expect(newUser.age).toEqual("30.76");
  });
  it("Convert users Earth age into Mercury, Venus, Mars and Jupiter years", function() {
    UserData.prototype.getUserVariousPlanetAge = function() {
      this.mercuryAge = parseFloat((this.age / .24).toFixed(2));
      this.venusAge = parseFloat((this.age / .62).toFixed(2));
      this.marsAge = parseFloat((this.age / 1.88).toFixed(2));
      this.jupiterAge = parseFloat((this.age / 11.86).toFixed(2));
    }
    const newUser = new UserData();
    newUser.age = 30.74;
    newUser.getUserVariousPlanetAge();
    expect(newUser.mercuryAge).toEqual(128.08);
    expect(newUser.venusAge).toEqual(49.58);
    expect(newUser.marsAge).toEqual(16.35);
    expect(newUser.jupiterAge).toEqual(2.59);
  });
  it("Determine users weight type", function() {
    UserData.prototype.getWeightType = function() {
      const BMI = (this.weight * 0.45)/((this.height * 0.025)*(this.height * 0.025));
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
    const newUser = new UserData();
    newUser.weight = 195;
    newUser.height = 70;
    const BMI = newUser.getWeightType();
    expect(BMI).toEqual("3");
  });
  it("Determine how many years a user has left to live on each planet", function() {
    UserData.prototype.getWeightType = function() {
      const BMI = (this.weight * 0.45)/((this.height * 0.025)*(this.height * 0.025));
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
      const weightType = this.getWeightType();
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
    const sex = 83;
    const education = "2";
    const relationshipStatus = "2";
    const workingStatus = "2";
    const income = "1";
    const exercise = "4";
    const diet = "5";
    const alcohol = "1";
    const smoking = "1";
    const weight = 195;
    const height = 70;
    const newUser = new UserData(sex, weight, height, education, relationshipStatus, workingStatus, income, exercise, diet, alcohol, smoking);
    newUser.age = 30.74;
    newUser.mercuryAge = 128.08;
    newUser.venusAge = 49.58;
    newUser.marsAge = 16.35;
    newUser.jupiterAge = 2.59;
    newUser.getYearsLeftToLiverPerPlanet();
    expect(newUser.expectedAgeOfDeathOnEarth).toEqual(92.00);
    expect(newUser.expectedAgeOfDeathOnMercury).toEqual(383.33);
    expect(newUser.expectedAgeOfDeathOnVenus).toEqual(148.39);
    expect(newUser.expectedAgeOfDeathOnMars).toEqual(48.94);
    expect(newUser.expectedAgeOfDeathOnJupiter).toEqual(7.76);
  });
  it("If user lives after life expectancy, get years lived after life expectancy per planet ", function() {
    UserData.prototype.getYearsLivedAfterLifeExpectancyPerPlanet = function() {
      this.yearsLivedAfterExpectedAgeOfDeathOnEarth = (this.age - this.expectedAgeOfDeathOnEarth).toFixed(2);
      this.yearsLivedAfterExpectedAgeOfDeathOnMercury = (this.mercuryAge - this.expectedAgeOfDeathOnMercury).toFixed(2);
      this.yearsLivedAfterExpectedAgeOfDeathOnVenus = (this.venusAge - this.expectedAgeOfDeathOnVenus).toFixed(2);
      this.yearsLivedAfterExpectedAgeOfDeathOnMars = (this.marsAge - this.expectedAgeOfDeathOnMars).toFixed(2);
      this.yearsLivedAfterExpectedAgeOfDeathOnJupiter = (this.jupiterAge - this.expectedAgeOfDeathOnJupiter).toFixed(2);
    }
    const newUser = new UserData();
    newUser.age = 100;
    newUser.mercuryAge = 416.67;
    newUser.venusAge = 161.29;
    newUser.marsAge = 53.19;
    newUser.jupiterAge = 8.43;
    newUser.expectedAgeOfDeathOnEarth = 92.00;
    newUser.expectedAgeOfDeathOnMercury = 383.33;
    newUser.expectedAgeOfDeathOnVenus = 148.39;
    newUser.expectedAgeOfDeathOnMars = 48.94;
    newUser.expectedAgeOfDeathOnJupiter = 7.76;
    newUser.getYearsLivedAfterLifeExpectancyPerPlanet();
    expect(newUser.yearsLivedAfterExpectedAgeOfDeathOnEarth).toEqual("8.00");
    expect(newUser.yearsLivedAfterExpectedAgeOfDeathOnMercury).toEqual("33.34");
    expect(newUser.yearsLivedAfterExpectedAgeOfDeathOnVenus).toEqual("12.90");
    expect(newUser.yearsLivedAfterExpectedAgeOfDeathOnMars).toEqual("4.25");
    expect(newUser.yearsLivedAfterExpectedAgeOfDeathOnJupiter).toEqual("0.67");
  });
});
