'use strict'

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const user = {
      'username': 'admin',
      'email': 'admin@gmail.com',
      'password': 'admin',
      'isCustomer': false
    }

    await User.create(user)
  }
}

module.exports = UserSeeder
