import React from 'react';
import classes from './ItemRaw.module.css';

function ItemRaw() {
    return (
        <div className={classes.itemRaw}>
            <div className={classes.itemCount}>10</div>
            <div className={classes.itemName}>Roast Chicken</div>
            <div className={classes.price}>5000.00</div>
        </div>

    )
}

export default ItemRaw;