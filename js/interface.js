$(document).ready(function (){

var birthday = new Birthday()

$('#name').focusout(function() {
  birthday.setName($('#name').val());
  $('#welcome').text("Welcome, "+ birthday.name);
})

$('#submit').on('click', function() {
  birthday.setName($('#name').val());
  $('#welcome').text("Welcome, "+ birthday.name);
  birthday.setBirthday($('#day').val(), $('#month').val()-1)
  $('#greeting').text(birthday.showGreeting());
  if (birthday.checkBirthday() === true){
  $('#greeting').css("background-color","yellow");
  }
})

})
