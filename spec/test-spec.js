import { UserData } from "./../src/js/backend.js";

describe("UserData", function() {

  it("Store user input in new object based on key value pairs or constructor UserData", function() {
    let newUser = new UserData;
    newUser.age = 30;
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

  it("get users current date of birth, i.e month, day and year, to calculate user's current age", function() {
    UserData.prototype.getUserCurrentAge = function(year, month, day) {
      let birthDate = new Date(year, month, day);
      let birthDateMilliseconds = birthDate.getTime();
      let ageMilliseconds = Date.now() - birthDateMilliseconds;
      let millisecondsPerYear = 31536000000;
      this.age = (ageMilliseconds/millisecondsPerYear).toFixed(2);
    }
    let newUser = new UserData;
    newUser.getUserCurrentAge(1987, 12, 16);
    expect(newUser.age).toEqual("30.74");
  });

  it("convert users Earth age into Mercury, Venus, Mars and Jupiter years", function() {
    UserData.prototype.getUserVariousPlanetAge = function() {
      this.MercuryAge = (this.age / .24).toFixed(2);
      this.VenusAge = (this.age / .62).toFixed(2);
      this.MarsAge = (this.age / 1.88).toFixed(2);
      this.JupiterAge = (this.age / 11.86).toFixed(2);
    }
    let newUser = new UserData;
    newUser.age = 30.74;
    newUser.getUserVariousPlanetAge();
    expect(newUser.MercuryAge).toEqual("128.08");
    expect(newUser.VenusAge).toEqual("49.58");
    expect(newUser.MarsAge).toEqual("16.35");
    expect(newUser.JupiterAge).toEqual("2.59");
  });

});
