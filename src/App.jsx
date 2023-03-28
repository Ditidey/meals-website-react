 import React from 'react';
import Header from './components/Headers/Header';
import Meals from './components/Meals/Meals';
 
 const App = () => {
  return (
    <div>
       <Header></Header>
       <div>
        <Meals></Meals>
       </div>
    </div>
  );
 };
 
 export default App;