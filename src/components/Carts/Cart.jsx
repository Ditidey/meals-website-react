import React from 'react';
import './Cart.css'
const Cart = ({checkList}) => {
   console.log(checkList)
   let name;
   let img;
   for(const id of checkList){
    name = (id.strMeal)
    img = id.strMealThumb;
   }
    return (
        <div className='cart'>
           <h1>Check List</h1> 
           <p>Selected items: {checkList.length} </p>
           
           <div className='div'>
            <p>Item Name: {name}</p>
            <img className='img' src={img} alt="" />
           </div>
        </div>
    );
};

export default Cart;