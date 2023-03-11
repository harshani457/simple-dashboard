import React from "react";
import classes from "./FoodItem.module.css"
const FoodItem = () => {
    return ( 
        <div className={classes.outer}>
            <h7 className={classes.time}>15 Minutes</h7>
            <div className={classes.heading}>
                <div className={classes.itemName}>Roast Chicken</div>
                <div className={classes.price}>Rs.500.00</div>
            </div>
            <div className={classes.oparator}>
                <button>-</button>
                <label>2</label>
                <button>+</button>
            </div>
        </div>
     );
}
 
export default FoodItem;