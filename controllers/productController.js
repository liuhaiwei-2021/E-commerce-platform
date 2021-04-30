const router = require('express').Router()
const productModel = require('../models/productModel')
const authService = require('../services/authService')
   //unsecured routs
   router.get('/', productModel.getProduct)
   // router.get('/products', productModel.getProduct)

   // secured routes 
   router.post('/new', authService.requireAuth, productModel.createProduct)  
   router.patch('/:id', authService.requireAuth, productModel.editProduct)
   router.delete('/:id', authService.requireAuth, productModel.deleteProduct)
   // router.delete('/:id', ()=>{
   //    console.log('delete')
   // })
   

module.exports = router;