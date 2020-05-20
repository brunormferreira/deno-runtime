import { Product } from '../types/types.ts'

let products: Product[] = [
  {
    id: '1',
    name: 'Product One',
    description: 'This is product one',
    price: 29.99,
  },
  {
    id: '2',
    name: 'Product Two',
    description: 'This is product two',
    price: 39.99,
  },
  {
    id: '3',
    name: 'Product Three',
    description: 'This is product three',
    price: 59.99,
  },
];

// @desc    Get all products
// @route   GET /api/v1/products
const getProducts = ({ response }: any) => {
  response.body = {
    success: true,
    data: products
  }
}

// @desc    Get single product
// @route   GET /api/v1/products
const getProduct = ({ response }: any) => {
  response.body = 'get-single'
}

// @desc    Add product
// @route   POST /api/v1/products
const addProduct = ({ response }: any) => {
  response.body = 'add'
}

// @desc    Update product
// @route   PUT /api/v1/products
const updateProduct = ({ response }: any) => {
  response.body = 'update'
}

// @desc    Delete product
// @route   DELETE /api/v1/products/:id
const deleteProduct = ({ response }: any) => {
  response.body = 'delete'
}

export { 
  getProducts,
  addProduct,
  updateProduct,
  getProduct,
  deleteProduct,
}