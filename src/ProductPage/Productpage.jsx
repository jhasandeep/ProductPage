import React, { useEffect, useState } from 'react'
import Category from './Category'


import "../style/Productpage.css"



const Productpage = () => {
    const [Cart,setCart] = useState([]);


    const [data ,setData]=useState({
        "data": [
            {
                "name": "Cosmetics",
                "productList": [
                    {
                        "name": "Hair Oil",
                        "price": 122
                    },
                    {
                        "name": "Face wash",
                        "price": 123
                    }
                ]
            },
            {
                "name": "Household",
                "productList": [
                    {
                        "name": "Hair Oil",
                        "price": 122
                    },
                    {
                        "name": "Face wash",
                        "price": 123
                    }
                ]
            }
        ]
    
    })

  
    useEffect(()=>{console.log(Cart)},[Cart]);
    

    const addToCart =(product) => {



        setCart([...Cart,product]);


        

        console.log("Product Added to the cart") 
      
        


    }


    const removeFromCart =(product) => {

        const index =  Cart.findIndex((obj)=> obj.name===product.name && obj.price === product.price);
     

     
         Cart.splice(index,1);
      
         setCart([...Cart]);

     
        console.log("Product removed from the cart");

        
    }



  return (
    <div className='product-page'> 
        <h1>Product Page </h1>


        <div>


            {
                data.data.map((item, index)=> (
                    <Category item={item} key={index} addToCart={addToCart} removeFromCart={removeFromCart}/>
                ))
            }
        </div>

              

    </div>
  )
}

export default Productpage