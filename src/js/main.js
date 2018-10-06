import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import { UserData } from "./backend.js";

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    let newUser = new UserData();
    let month = parseInt($("#month").val());
    let day = parseInt($("#day").val());
    let year = parseInt($("#year").val());
    newUser.sex = parseInt($("input[name=gender]:checked").val());
    newUser.weight = parseInt($("#weight").val());
    newUser.height = (parseInt($("#feet").val()) * 12) + parseInt($("#inch").val());
    newUser.education = $("input[name=education]:checked").val();
    newUser.relationshipStatus = $("input[name=relationship]:checked").val();
    newUser.workingStatus = $("input[name=working]:checked").val();
    newUser.incomes = $("input[name=income]:checked").val();
    newUser.exercise = $("input[name=exercise]:checked").val();
    newUser.diet = $("input[name=health]:checked").val();
    newUser.alcohol = $("input[name=alcohol]:checked").val();
    newUser.smoking = $("input[name=smoking]:checked").val();
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
