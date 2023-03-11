import React,{ useState } from 'react';
import classes from './FoodType.module.css'

function FoodType(props) {


    const [mouseState, setMouseEntered] = useState(false);

    const mouseEnterHandler = () => {
        setMouseEntered(true);
    };

    const mouseLeaveHandler = () => {
        setMouseEntered(false);
    };

    return (
        <div
            className={classes.outer}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            style={{ backgroundColor: !mouseState ? props.defColor : props.onColor }}
        >
            <img className={classes.breakfast_img} src={props.img}></img>
            <div className={classes.titleHolder}>
                <span className={classes.mainTitle}>{props.heading}</span>
                <span className={classes.subTitle}>13 Items</span></div>

        </div>
    );
}
 
export default FoodType;