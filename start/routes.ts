/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/index')

router.get('/cart', async (ctx) => {return ctx.view.render('pages/cart')})
router.get('/products', async (ctx) => {return ctx.view.render('pages/products')})
