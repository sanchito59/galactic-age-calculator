import $ from 'jquery';
import { Age } from './../src/galacticAge.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#ageForm').submit(function (event) {
    event.preventDefault();
    const ageInput = $('#ageInput').val();
    let userAge = new Age(ageInput);
    console.log(userAge);
    const mercuryAge = userAge.mercuryYears();
    console.log(mercuryAge);
  });
});
