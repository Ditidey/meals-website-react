import React from 'react';
import './Cart.css'
const Cart = ({checkList}) => {
//    console.log(checkList)
   let name;
   let img;
   let inst;
   const handleBack = () =>{
      if(checkList.length > 0){
        let ind = checkList.length - 1;
 
      }
      else{return alert('Select more')}
       
   }
   for(const id of checkList){
     
    name = (id.strMeal)
    img = id.strMealThumb;
    inst = id.strInstructions;
   }
    return (
        <div className='cart'>
           <h1>Check List</h1> 
           <p>Selected items: {checkList.length} </p>
             <button onClick={handleBack}>Back</button>
             <button>Next</button>
           <div className='div'>
            <p>Item Name: {name}</p>
            <img className='img' src={img} alt="" />
            <p>{inst}</p>
           </div>
        </div>
    );
};

export default Cart;