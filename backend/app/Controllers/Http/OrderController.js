'use strict'

const Order = use('App/Models/Order')

class OrderController {
  async index ({ request, response, view }) {
  }

  async store ({ request, auth }) {
    const { id } = auth.user
    const data = request.only(['total'])

    const order = await Order.create({ ...data, user_id: id })

    return order
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = OrderController
