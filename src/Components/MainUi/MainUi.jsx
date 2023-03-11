import React from 'react';
import BillContainer from '../Bill/BillContainer/BillContainer';
/*import CustomerDetails from "../Bill/CutomerDetails/CustomerDetails";
import ItemRawContainer from "../Bill/ItemRawContainer/ItemRawContainer";
import Payment from "../Bill/Payment/Payment";*/
import FoodItemContainer from '../FoodItems/FoodItemContainer';
import FoodTypeContainer from '../FoodTypeTile/FoodTypeContainer';
import UpperNavBar from '../NavBar/UpperNavBar/UpperNavBar';
import SideBar from '../SideBar/SideBar';
import OrderListOuter from '../OrderBar/OrderListOuter';
import classes from './MainUi.module.css';

const MainUi = () => {
    return ( 
        <div className={classes.mainOuter}>
            <div className={classes.left}>
            <UpperNavBar />
            <div className={classes.FoodContent}>
                <div className={classes.listContainer}>
                    <div className={classes.list}>
                        <SideBar />
                    </div>
                     <OrderListOuter />
                </div> 
                 
                <div className={classes.FoodCorner}>
                    <FoodTypeContainer />
                    <FoodItemContainer />
                </div>
                
            </div>
        </div>
        <div className={classes.right}>
            <BillContainer />
        </div>
        {/* <div className={classes.box}></div> */}
            
    </div>
        
     );
}
 
export default MainUi;
