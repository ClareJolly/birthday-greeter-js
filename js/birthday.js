'use strict'

function Birthday() {

  this.birthdayDate;
  this.currentTime = new Date()
  this.name;

  Birthday.prototype.setName = function(name) {
    this.name = name;
  }

  Birthday.prototype.showGreeting = function() {
    if (this.checkBirthday() === true){
      return "Happy Birthday " + this.name +" !";
    } else {
     return "Your birthday is in " + this.calculateDaysToBirthday()
   }
  }

  Birthday.prototype.setBirthday = function(day, month) {
    if ((new Date().getMonth() <= month) && (new Date().getDate() <= day)){
      this.birthdayDate = new Date(this.currentTime.getFullYear(), month, day).toLocaleDateString();

    } else{
      this.birthdayDate = new Date(this.currentTime.getFullYear()+1, month, day).toLocaleDateString();
    }
  }

  Birthday.prototype.checkBirthday = function () {

    if (this.currentTime.toLocaleDateString() === this.birthdayDate) {
      return true
    } else {
      return false
    }
  }

  Birthday.prototype.calculateDaysToBirthday = function(){

      //console.log((this.birthdayDate - this.currentTime))
      //return Math.floor((this.birthdayDate - this.currentTime)/(1000*60*60*24));
      return 10

  }




};
