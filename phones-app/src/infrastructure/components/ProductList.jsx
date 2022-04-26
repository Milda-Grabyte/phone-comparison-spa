import React, { useEffect, useState } from 'react'
import { productService } from '../../domain/service/product.service'

export const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => <li key={product.id}>{product.model}</li>)}
    </ul>
  )
}