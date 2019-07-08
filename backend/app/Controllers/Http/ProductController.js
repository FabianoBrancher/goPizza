'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index ({ request, response, view }) {

    const products = await Product
      .query()
      .with('files', builder => builder.select('id'))
      .fetch()

    return products
  }

  async store ({ request }) {
    let {
      title,
      description,
      delivery_time,
      file_id
    } = request.post()

    const product = await Product.create({
      title,
      description,
      delivery_time,
      file_id
    })

    return product
  }

  async show ({ params }) {
    const product = await Product.findOrFail(params.id)
    await product.load('files')

    return product
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = ProductController
