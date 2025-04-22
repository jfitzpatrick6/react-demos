import React from 'react'

function ProductInfo() {
    const product = {"name": "laptop", "price": "$1200", "availbility": "In Stock"}
    return (
    <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.availbility}</p>
    </div>
  )
}

export default ProductInfo