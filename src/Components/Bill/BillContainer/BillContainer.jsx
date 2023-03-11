import React from 'react';
import classes from './BillContainer.module.css';
import CustomerDetails from './CutomerDetails/CustomerDetails';
import ItemRawContainer from './ItemRawContainer/ItemRawContainer';
import Payment from './Payment/Payment';

const BillContainer = () => {
    return ( 
        <div className={classes.outer}>
            <CustomerDetails />
            <ItemRawContainer />
            <Payment />
        </div>
     );
}
 
export default BillContainer;