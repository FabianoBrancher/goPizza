'use strict'

const Type = use('App/Models/Type')

class TypeController {
  async index ({ params }) {
    const types = await Type
      .query()
      .where('product_id', '=', params.id)
      .fetch()

    return types
  }

  async store ({ request, params }) {
    const product_id = params.id

    let {
      description,
      image_url
    } = request.post()

    const type = await Type.create({
      description,
      product_id,
      image_url
    })

    return type
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = TypeController
