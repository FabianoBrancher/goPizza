'use strict'

const Model = use('Model')

class Product extends Model {
  orders () {
    return this.belongsToMany('App/Models/Order')
      .pivotTable('order_products')
      .pivotModel('App/Models/OrderProduct')
  }

  types () {
    return this.hasMany('App/Models/Type')
  }

  files () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Product
