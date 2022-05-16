import React from 'react';

import Product from '../product/Product';
import {products} from '../../data';

import './ProductList.css';

const ProductList = () => {
  return (
    <div className='productList'>
      <div className='productList-texts'>
          <h1 className='productList-title'> Create & inspire by me</h1>
          <p className='productList-desc'>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab dolores unde dolorum, fugiat quos quia corrupti blanditiis cum illo, laboriosam veritatis molestias nihil.
          </p>
      </div>

      <div className='productList-list'>
        {products.map(product=>{
          return(
             <Product key={product.id} img={product.img} link={product.link}/>
          )
        })}
        
      
      </div>
    </div>
  )
}

export default ProductList
