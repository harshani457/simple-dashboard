import React from 'react';
import FoodItem from './FoodItem';
import classes from './FoodItemContainer.module.css'
const FoodItemContainer = () => {
    return ( 
        <div className={classes.outer}>
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
        </div>
     );
}
 
export default FoodItemContainer;