import React from "react";
import Mainlogo from "./MainLogo";
import SearchBar from "./SearchBar/SearchBar";
import classes from "./UpperNavBar.module.css"

const UpperNavBar = () => {
    return ( 
        <div className={classes.navOuter}>
            <Mainlogo />
            <SearchBar />
        </div>
     );
}
 
export default UpperNavBar;