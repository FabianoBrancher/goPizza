'use strict'

const Type = use('App/Models/Type')

class TypeSeeder {
  async run () {
    const types = [
      {
        'description': 'Portuguesa',
        'image_url': '/images/Pizzas/1.png',
        'product_id': 1
      },
      {
        'description': 'Calabresa',
        'image_url': '/images/Pizzas/2.png',
        'product_id': 1
      },
      {
        'description': '4 Queijos',
        'image_url': '/images/Pizzas/3.png',
        'product_id': 1
      },
      {
        'description': 'Frango com catupiry',
        'image_url': '/images/Pizzas/4.png',
        'product_id': 1
      }
    ]

    await Type.createMany(types)
  }
}

module.exports = TypeSeeder
