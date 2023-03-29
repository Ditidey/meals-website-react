import React, { useEffect, useState } from 'react';
import Cart from '../Carts/Cart';
import { getLocalStorage, setLocalStorage } from '../LocalStorage';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meals.css';
  
const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    
    const [checkList, setCheckList] = useState([]);
    // console.log(checkList)
      useEffect(()=>{
        const storedList = getLocalStorage();
        const newCheckList = [];
        for(const id in storedList)
        {
             const addedList = meals.find(meal => meal.id === id);
             if(addedList){
                newCheckList.push(addedList);
             }
        }
        setCheckList(newCheckList);
      }, [meals])
    const handleCheckList = (getMeal) => {
        const newSet = [...checkList, getMeal];
        setCheckList(newSet);
        setLocalStorage(getMeal.idMeal);

    }
    return (
        <>
            <div className='search-div'>
                <input className='input' type="text" />
                <button>Search</button>
            </div>
            <div className='container-div'>
                <div className='meals-container'>
                    {
                        meals.map(meal => <SingleMeal 
                            key={meal.idMeal} 
                            meal={meal} 
                            handleCheckList = {handleCheckList}></SingleMeal>)
                    }
                </div>
                 <div className='cart-container'>
                 <Cart checkList ={checkList}></Cart>
                 </div>
            </div>

        </>
    );
};

export default Meals;