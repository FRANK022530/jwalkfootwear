const express = require('express')
const router = express.Router()


//get all products
router.get( '/', (req, res) => {
    res.json({message : "AllProducts"})
}) 

//get single products
router.get( '/:id', (req, res) => {
    res.json({message : "SingleProduct"})
}) 

//post products
router.post( '/', (req, res) => {
    res.json({message : "Insert product"})
}) 

//delete products
router.delete( '/:id', (req, res) => {
    res.json({message : "delete product"})
}) 


//update products
router.patch( '/:id', (req, res) => {
    res.json({message : "update product"})
}) 




module.exports = router