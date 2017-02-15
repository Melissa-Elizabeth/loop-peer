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

  $('span').text(total);

  $('form').on('submit', function() {
    event.preventDefault();

    var inputArray = $(this).serializeArray();
    var newEmployeeObject = {};
    console.log(inputArray);


    inputArray.forEach(function(inputField){
      newEmployeeObject[inputField.name] = inputField.value;
    });
    console.log(newEmployeeObject);


    $('table').append('<tr>');
    for (var i in newEmployeeObject) {
    //  console.log('obj.' + i, '=', newEmployeeObject[i]);
     $('table > tbody > tr:last-child').append('<td>' + newEmployeeObject[i] + '</td>');
    }
    $('table').append('</tr>');

    // Output:
    // "obj.a = 1"
    // "obj.b = 2"
    // "obj.c = 3"

    //
    // $('table').append('<tr><td>' + newEmployeeObject.firstName + '</td><td>' + newEmployeeObject.yearsOfExperience +'</td></tr>');

    total += parseFloat(newEmployeeObject.yearsOfExperience);


    $('input').val('');

    $('span').text(total);

    // $('span').text(total += parseFloat(grabSpan));
  }); // end on click listener

}); // end doc ready
