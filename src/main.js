import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#ageForm').submit(function (event) {
    event.preventDefault();
    const ageInput = $('#ageInput').val();
    alert(ageInput);
  });
});
