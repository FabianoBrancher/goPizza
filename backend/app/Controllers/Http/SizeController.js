'use strict'

const Size = use('App/Models/Size')

class SizeController {
  async index ({ params }) {
    const { id } = params
    const sizes = await Size
      .query()
      .where('type_id', '=', id)
      .fetch()

    return sizes
  }

  async show ({ params, request, response, view }) {

  }
}

module.exports = SizeController
