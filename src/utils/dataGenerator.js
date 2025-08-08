const { faker } = require('@faker-js/faker');

class DataGenerator {
  static getRandomUsername() {
    return faker.internet.userName();
  }

  static getRandomPassword() {
    return faker.internet.password();
  }

  static getRandomEmail() {
    return faker.internet.email();
  }
}

module.exports = DataGenerator;
