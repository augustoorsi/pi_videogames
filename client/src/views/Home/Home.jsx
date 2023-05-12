import { useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import { useDispatch } from "react-redux";
import { getAllVideogames } from "../../redux/actions";


const Home = ()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllVideogames())
    },[dispatch],)

    return(
        <>
            <Cards></Cards>
        </>
    )
}


export default Home;