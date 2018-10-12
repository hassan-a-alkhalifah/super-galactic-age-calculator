import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/styles.scss';
import UserData from "./UserData.js";
$(document).ready(function() {
  const test = new UserData();
  $("#form").submit(function(event) {
    event.preventDefault();
    const month = parseInt($("#month").val());
    const day = parseInt($("#day").val());
    const year = parseInt($("#year").val());
    const sex = parseInt($("input[name=gender]:checked").val());
    const weight = parseInt($("#weight").val());
    const height = (parseInt($("#feet").val()) * 12) + parseInt($("#inch").val());
    const education = $("input[name=education]:checked").val();
    const relationshipStatus = $("input[name=relationship]:checked").val();
    const workingStatus = $("input[name=working]:checked").val();
    const incomes = $("input[name=income]:checked").val();
    const exercise = $("input[name=exercise]:checked").val();
    const diet = $("input[name=health]:checked").val();
    const alcohol = $("input[name=alcohol]:checked").val();
    const smoking = $("input[name=smoking]:checked").val();
    const newUser = new UserData(sex, weight, height, education, relationshipStatus, workingStatus, incomes, exercise, diet, alcohol, smoking);
    newUser.getUserCurrentAge(year, month, day);
    newUser.getUserVariousPlanetAge();
    newUser.getWeightType();
    newUser.getYearsLeftToLiverPerPlanet();
    if(this.age > this.expectedAgeOfDeathOnEarth) {
      newUser.getYearsLivedAfterLifeExpectancyPerPlanet();
    }
    console.log(newUser);
  });
});
