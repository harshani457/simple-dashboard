import React from 'react';
import classes from './BillContainer.module.css';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import ItemRawContainer from '../ItemContainer/ItemRawContainer';
import Payment from '../Payment/Payment';

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