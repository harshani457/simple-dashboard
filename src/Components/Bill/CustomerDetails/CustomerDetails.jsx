import React from 'react';
import classes from './CustomerDetails.module.css'

function CustomerDetails() {
    return (
        <div className={classes.customerDetails}>
            <div className={classes.label}>
                <label>Table 05</label>
            </div>
            <div>
                <h2 className={classes.name}>Customer Name</h2>
                <h7 className={classes.id}>Cashier id : C008</h7>
            </div>
        </div>
    )
}

export default CustomerDetails;