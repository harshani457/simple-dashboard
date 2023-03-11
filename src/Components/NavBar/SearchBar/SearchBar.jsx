import React from "react";
import searchIco from "../../../assets/search.png"
import classes from "./SearchBar.module.css"
const SearchBar = () => {
    return ( 
        <div className={classes.outer}>
            <img src={searchIco} className={classes.searchIco}></img>
            <input type={"search"} placeholder="Search Here" className={classes.input}></input>
        </div>
     );
}
 
export default SearchBar;