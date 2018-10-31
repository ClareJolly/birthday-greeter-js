'use strict';

describe ('Birthday', function () {

var birthday;

  beforeEach(function () {
    birthday = new Birthday()

  });

  it('shows hello user ', function () {
    expect(birthday.showGreeting("Tom")).toEqual("hello Tom")
  });

  it('accepts birthday', function () {
    birthday.setBirthday(31, 9);
    expect(birthday.birthdayDate).toEqual("31/10/2018")
  });

  it('check if birthday is today', function () {
    birthday.setBirthday(31, 9);
    expect(birthday.checkBirthday()).toEqual(true)
  });

  it('check if birthday is not today', function () {
    birthday.setBirthday(31, 10);
    expect(birthday.checkBirthday()).toEqual(false)
  });
});
