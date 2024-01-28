import React from 'react'
import "../style/Product.css"

const Product = ({product,addToCart, removeFromCart}) => {

    const {name, price} = product;

  

   

    const addProductToCart = () =>{

        
        const newItem = {"name": name, "price" : price}

        
        addToCart(newItem);
     


    }

    const removeProductFromCart = () => {
        
        const newItem = {"name": name, "price" : price}
        removeFromCart(newItem);

    }
  return (
    <div  className="product">
        <div className='product-values'>
        <p>Name: {name}</p>
        <p>Price: {`${price}.00`}</p>
        
        </div>

        <div className='buttons'>
        <button onClick={addProductToCart}>Add to the Cart </button>
        <button onClick={removeProductFromCart}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default Product