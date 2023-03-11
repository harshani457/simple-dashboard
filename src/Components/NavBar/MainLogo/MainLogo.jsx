import React from "react";
import classes from "./MainLogo.module.css"
import imageSrc from "../../assets/iCET logo.png"

const Mainlogo = () => {
    return ( 
        <div className={classes.logoOuter}>
            <img src={imageSrc} className={classes.logo}></img>
        </div>
     );
}
 
export default Mainlogo;