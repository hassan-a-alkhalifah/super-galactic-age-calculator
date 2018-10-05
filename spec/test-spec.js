import { UserData } from "./../src/js/backend.js";

describe("UserData", function() {

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
      let BMI = (newUser.weight * 0.45)/((newUser.height * 0.025)*(newUser.height * 0.025));
      if(BMI < 18.5) {
        return 1;
      } else if(BMI >= 18.5 && BMI <= 24.9) {
        return 2;
      } else if(BMI >= 25 && BMI <= 29.9) {
        return 3;
      } else {
        return 4;
      }
    }
    let newUser = new UserData();
    newUser.weight = 195;
    newUser.height = 70;
    let BMI = newUser.getWeightType();
    expect(BMI).toEqual(3);
  });

});
