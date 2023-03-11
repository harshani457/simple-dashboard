import React from "react";
import classes from "./OrderRecord.module.css"

const OrderRecord = () => {
    return ( 
        <>
        <div className={classes.Outer}>
            <div>
                <h2 className={classes.OrderId}>#O-1026</h2>
            </div>
            <div className={classes.OrderStatus}>
                <span>In-Procces</span>
            </div>
        </div>
        </>
        
        
     );
}
 
export default OrderRecord;