import React from 'react'
import ProductListItem from './product-list-item'

import './styles.css'

export default function ProductList(props) {
  return <div className="product-listing">
    {
      props.products.map( product =>
        <ProductListItem {...product} />)
    }
  </div>
}