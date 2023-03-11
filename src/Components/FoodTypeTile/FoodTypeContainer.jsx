import React from "react";
import classes from './FoodTypeContainer.module.css';
import FoodType from "./foodType";
import breakfast_img from "../../assets/breakfast.png"
import Lunch_img from "../../assets/lunch.png"
import Dinner_img from "../../assets/dinner.png"
import Drinks_img from "../../assets/drinks.png"

const FoodTypeContainer = () => {
    return ( 
        <div className={classes.container}>
            <FoodType heading="Breakfast" defColor="#b4fff6" onColor="#92F0AA" img={breakfast_img}/>
            <FoodType heading="Lunch" defColor="#a4ffb8" onColor="#A4FF85" img={Lunch_img}/>
            <FoodType heading="Dinner" defColor="#fff6a4" onColor="#FFD1B9" img={Dinner_img}/>
            <FoodType heading="Drinks" defColor="#9bb7ff" onColor="#C0A2FF" img={Drinks_img}/>
            <FoodType heading="Desserts" defColor="#ffb4b4" onColor="#FF83B4" img={Drinks_img}/>
            <FoodType heading="Soup" defColor="#fdbff" onColor="#967CFF" img={Drinks_img}/>
        </div>
        
     );
}
 
export default FoodTypeContainer;