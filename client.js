$(document).ready(function() {
var total = 0;
var employeeArray = [
  {name: 'Bob', yearsOfExperience: 10},
  {name: 'Carla', yearsOfExperience: 4},
  {name: 'Kris', yearsOfExperience: 14}
];


employeeArray.forEach(function(employee) {
 total += parseFloat(employee.yearsOfExperience);

console.log(total);

$('table').append('<tr><td>' + employee.name + '</td><td>' + employee.yearsOfExperience +'</td></tr>');

});

$('button').on('click', function() {
  var firstName = $('#firstName').val();
  var years= $('#years').val();
  employeeArray.push({name: firstName, yearsOfExperience: years});
  console.log(employeeArray);
$('table').append('<tr><td>' + firstName + '</td><td>' + years +'</td></tr>');
  total += parseFloat(years);

  var grabSpan = $('span').text();

  $('span').text(total += parseFloat(grabSpan));
}); // end on click listener

}); // end doc ready
