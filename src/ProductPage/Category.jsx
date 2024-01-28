import React from 'react'
import Product from './Product';
import "../style/Category.css"

const Category = ({item,addToCart, removeFromCart}) => {

    const {name , productList } = item;
  return (
    <div className='category'>
        <h2>{name}</h2>
        <hr/>

        <div className='category-items'>{

            productList.map((product, index)=> (

                <Product product={product} key={index} addToCart={addToCart} removeFromCart={removeFromCart}/>
            ))
        }
        </div>

      
    </div>
  )
}

export default Category