import React from 'react';
import classes from './Payment.module.css'

function Payment() {
    return (
        <div className={classes.payment}>
            <div className={classes.top}>
                <div className={classes.Raw}>
                    <h2 className={classes.text}>Sub Total</h2>
                    <h2 className={classes.price}>Rs.7895.36</h2>
                </div>
                <div className={classes.Raw}>
                    <h2 className={classes.text}>Tax 10%</h2>
                    <h2 className={classes.price}>Rs.789.00</h2>
                </div>
            </div>
            <div className={classes.bottom}>
                <div>
                    <h2 className={classes.totalText}>Total Payment</h2>
                </div>
                <div className={classes.totalPrice}>
                    <h2>Rs.8684.00</h2>
                </div>
            </div>
        </div>
    )
}
export default Payment;