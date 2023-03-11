import React from "react";
import OrderRecode from "./OrderRecode";
import classes from "./OrderList.module.css"

const OrderListOuter = () => {
    return ( 
        <div className={classes.Outer}>
            <h3 className={classes.headder}>TODAY ORDERS</h3>
            <div className={classes.inner}>
                <OrderRecode />
                <OrderRecode />
                <OrderRecode />
                <OrderRecode />
                <OrderRecode />
            </div>
        </div>

     );
}
 
export default OrderListOuter;