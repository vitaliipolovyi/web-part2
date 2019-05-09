'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')

const productListService = require('./../services/product.all')
const productCreateService = require('./../services/product.create')

function _getMockProduct (id = null) {
  return {
    id: 33,
    name: 'Prod1',
    weight: 1,
    volume: 5
  }
}

module.exports = {
  index (req, res) {
    res.render('pages/product/index')
  },
  async productList (req, res) {
    try {
      const productList = await productListService()
      res.render('pages/product/list', {
        products: productList
      })
    } catch (error) {
      res.render('pages/product/list', {
        products: [],
        errors: [{ msg: error.message }]
      })
    }
  },
  createProductForm (req, res) {
    res.render('pages/product/add')
  },
  postCreateProduct: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('sku')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('sku').escape(),
    async (req, res) => {
        const success = true
        const productData = req.body
        const errors = validationResult(req)

        if (errors.isEmpty()) {
          try {
            const product = await productCreateService(req.body)
            req.flash('info', `Product "${product.name}" "${product.sku}" is Added`)
            res.redirect('/product/list')
        } catch (error) {
          res.render('pages/product/add', {
            errors: [{ msg: error.message }]
          })
        }
      } else {
        res.render('pages/product/add', {
          errors: errors.array()
        })
      }
    }
  ],
  updateProductForm (req, res) {
    const mockProduct = _getMockProduct(req.body.id)

    res.render('pages/product/update', { product: mockProduct })
  },
  putUpdateProduct (req, res) {
    const success = true
    const productData = req.body
    const mockProduct = _getMockProduct(productData.id)

    if (success) {
      req.flash('info', `Product "#${productData.id} ${productData.name}" is Updated`)
      res.redirect('/product/list')
    } else {
      res.render('pages/product/update', {
        product: mockProduct,
        newProduct: productData,
        errors: [{ 'msg': 'Error Omg' }]
      })
    }
  },
  deleteProductFrom (req, res) {
    const mockProduct = _getMockProduct(req.body.id)

    res.render('pages/product/delete', { product: mockProduct })
  },
  deleteProduct (req, res) {
    const success = true
    const productData = req.body
    const mockProduct = _getMockProduct(productData.id)

    if (success) {
      req.flash('info', `Product "#${mockProduct.id} ${mockProduct.name}" is Deleted`)
      res.redirect('/product/list')
    } else {
      res.render('pages/product/delete', {
        product: mockProduct,
        errors: [{ 'msg': 'Error Omg' }]
      })
    }
  }
}
