import { UserData } from "./../src/js/backend.js";

describe("UserData", function() {

  it("Store user input in new object based on key value pairs or constructor UserData", function() {
    let newUser = new UserData;
    newUser.age = 31;
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

});
