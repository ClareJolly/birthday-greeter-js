'use strict';

describe ('Birthday', function () {

var birthday;

  beforeEach(function () {
    birthday = new Birthday()

  });

  it('sets the name of the user ', function () {
    birthday.setName("Tom")
    expect(birthday.name).toEqual("Tom")
  });

  it('accepts birthday', function () {
    birthday.setBirthday(31, 9);
    expect(birthday.birthdayDate).toEqual("31/10/2018")
  });

  it('check if birthday is today', function () {
    console.log('check if birthday is today')
    birthday.setBirthday(new Date().getDate(), new Date().getMonth());
    expect(birthday.checkBirthday()).toEqual(true)
  });

  it('check if birthday is not today', function () {
    birthday.setBirthday(31, 10);
    expect(birthday.checkBirthday()).toEqual(false)
  });

  it('check greeting', function () {
    birthday.setName("Tom")
    birthday.setBirthday(new Date().getDate(), new Date().getMonth());
    expect(birthday.showGreeting()).toEqual("Happy Birthday Tom !")
  });

  it('check if birthday is not today', function () {
    birthday.setName("Tom")
    birthday.setBirthday(new Date().getDate(), new Date().getMonth()+2);
    expect(birthday.showGreeting()).toEqual("Your birthday is in 10")
  });

  it('check if birthday is not today', function () {
    birthday.setName("Tom")
    birthday.setBirthday(new Date().getDate(), new Date().getMonth()-2);
    expect(birthday.showGreeting()).toEqual("Your birthday is in 10")
  });

});
