'use strict'

function _getMockProduct (id = null) {
  return {
    id: 33,
    name: 'Prod1',
    weight: 1,
    volume: 5
  }
}

function _getMockProducts () {
  return [ _getMockProduct() ]
}

module.exports = {
  index (req, res) {
    res.render('pages/product/index')
  },
  productList (req, res) {
    const mockProductList = _getMockProducts()

    res.render('pages/product/list', { products: mockProductList })
  },
  createProductForm (req, res) {
    res.render('pages/product/add')
  },
  postCreateProduct (req, res) {
    const success = true
    const productData = req.body

    if (success) {
      req.flash('info', `Product "${productData.name}" is Added`)
      res.redirect('/product/list')
    } else {
      res.render('pages/product/add', { newProduct: productData, errors: [{ 'msg': 'Error Omg' }] })
    }
  },
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
