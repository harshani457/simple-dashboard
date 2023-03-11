import React from 'react';
import classes from './ItemRawContainer.module.css';
import ItemRaw from './ItemRaw/ItemRaw';

function ItemRawContainer() {
    return (
        <div className={classes.wrap}>
            <div className={classes.box}></div>
            <div className={classes.container}>
                 <ItemRaw />
                 <ItemRaw />
                  <ItemRaw />
                  <ItemRaw />
                  <ItemRaw />
                  <ItemRaw />
                 <ItemRaw />
                 <ItemRaw />
            </div>
    </div>
        
    )
}

export default ItemRawContainer;



