'use strict'

const Product = use('App/Models/Product')
const Factory = use('Factory')

class ProductSeeder {
  async run () {

    const products = [
      {
        'title': 'Pizzas',
        'description': 'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
        'delivery_time': 30,
        'file_id': 1
      },
      {
        'title': 'Massas',
        'description': '10 tipos de massas com diferentes molhos para te satisfazer.',
        'delivery_time': 25,
        'file_id': 2
      },
      {
        'title': 'Calzones',
        'description': 'Calzones super recheados com mais de 50 sabores diferentes.',
        'delivery_time': 15,
        'file_id': 3
      },
      {
        'title': 'Refrigerantes',
        'description': 'Refrigerantes, sucos, chá gelado, energéticos e água.',
        'delivery_time': 5,
        'file_id': 4
      },
      {
        'title': 'Bebidas Alcoólicas',
        'description': 'Cervejas artesanais, vinhos e destilados.',
        'delivery_time': 5,
        'file_id': 5
      },
    ]
    await Product.createMany(products)
  }
}

module.exports = ProductSeeder
