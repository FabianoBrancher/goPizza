'use strict'

const Size = use('App/Models/Size')

class SizeSeeder {
  async run () {
    const sizes = [
      // TAMANHOS PARA PIZZA CALABRESA
      {
        'title': 'Gigante',
        'price': 76.00,
        'type_id': 1,
        'image_url': '/images/Tamanhos/tamanho-gg.png'
      },
      {
        'title': 'Grande',
        'price': 59.00,
        'type_id': 1,
        'image_url': '/images/Tamanhos/tamanho-g.png'
      },
      {
        'title': 'Média',
        'price': 42.00,
        'type_id': 1,
        'image_url': '/images/Tamanhos/tamanho-m.png'
      },
      {
        'title': 'Pequena',
        'price': 29.00,
        'type_id': 1,
        'image_url': '/images/Tamanhos/tamanho-p.png'
      },
      // TAMANHOS PARA PIZZA PORTUGUESA
      {
        'title': 'Gigante',
        'price': 70.00,
        'type_id': 2,
        'image_url': '/images/Tamanhos/tamanho-gg.png'
      },
      {
        'title': 'Grande',
        'price': 50.00,
        'type_id': 2,
        'image_url': '/images/Tamanhos/tamanho-g.png'
      },
      {
        'title': 'Média',
        'price': 40.00,
        'type_id': 2,
        'image_url': '/images/Tamanhos/tamanho-m.png'
      },
      {
        'title': 'Pequena',
        'price': 25.00,
        'type_id': 2,
        'image_url': '/images/Tamanhos/tamanho-p.png'
      },
      // TAMANHOS PARA PIZZA 4 QUEIJOS
      {
        'title': 'Gigante',
        'price': 65.00,
        'type_id': 3,
        'image_url': '/images/Tamanhos/tamanho-gg.png'
      },
      {
        'title': 'Grande',
        'price': 49.00,
        'type_id': 3,
        'image_url': '/images/Tamanhos/tamanho-g.png'
      },
      {
        'title': 'Média',
        'price': 37.00,
        'type_id': 3,
        'image_url': '/images/Tamanhos/tamanho-m.png'
      },
      {
        'title': 'Pequena',
        'price': 23.00,
        'type_id': 3,
        'image_url': '/images/Tamanhos/tamanho-p.png'
      }
    ]

    await Size.createMany(sizes)
  }
}

module.exports = SizeSeeder
