const setLocalStorage = (id)=>{
    
    const getData = getLocalStorage();
    let quantity = getData[id];
    if(!quantity)
    {
        
        getData[id] = 1;

    }
    else
    {
        const newQuantity = quantity + 1;
        getData[id] = newQuantity;
    }
    localStorage.setItem('meals', JSON.stringify(getData));
}

const getLocalStorage = () =>{
    let mealsList = {};
    const storedMeals = localStorage.getItem('meals');
    if(storedMeals)
    {
        mealsList = JSON.parse(storedMeals);
    }
    return mealsList;
}
export {setLocalStorage,
        getLocalStorage
};