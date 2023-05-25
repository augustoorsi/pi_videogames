
import { Link } from "react-router-dom";
import style from "./Landing.module.css"


const Landing = ()=>{

    return(
        <div className={style.container}>
            <div>
                <Link to="/home"><button className={style.button}>START!</button></Link>
            </div>
        </div>
    )
}


export default Landing;