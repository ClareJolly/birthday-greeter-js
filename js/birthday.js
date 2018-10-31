'use strict'

function Birthday() {

  this.birthdayDate;
  this.currentTime = new Date()

  Birthday.prototype.showGreeting = function(name) {
    return "hello " + name +"";
  }

  Birthday.prototype.setBirthday = function(day, month) {
    // this.birthdayDate = day + month;
    this.birthdayDate = new Date(this.currentTime.getFullYear(), month, day).toLocaleDateString();
    // return true;
  }

  Birthday.prototype.checkBirthday = function () {
    if (this.currentTime.toLocaleDateString() === this.birthdayDate) {
      return true
    } else {
      return false
    }
  }
};
