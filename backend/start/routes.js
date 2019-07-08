'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

// Route.group(() => {
Route.get('/products', 'ProductController.index')
Route.post('/products', 'ProductController.store')

Route.get('/products/:id', 'ProductController.show')

Route.post('/products/:id/image', 'FileController.store')

Route.get('/files/:id', 'FileController.show')

Route.get('/products/:id/types', 'TypeController.index')
Route.post('/products/:id/types', 'TypeController.store')

Route.get('/products/types/:id/sizes', 'SizeController.index')
// }).middleware(['auth'])
