import React from 'react';
import './SingleMeal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheckToSlot } from '@fortawesome/free-solid-svg-icons'
const SingleMeal = ( props) => {
    const {meal} = props;
    const handleCheckList = props.handleCheckList;
    return (
        <div className='single-meal'>
            <img src={meal.strMealThumb} alt="" />
            <h5>Name: {meal.strMeal} </h5>
            <p>Area: {meal.strArea}</p>
             
            <p>Ingredients: {meal.strTags}</p>
            {/* <p>Instructions: {meal.strInstructions}</p> */}
            <button onClick={()=> handleCheckList(meal)}>Add to CheckList <FontAwesomeIcon icon={faCheckToSlot} /></button>
        </div>
    );
};

export default SingleMeal;