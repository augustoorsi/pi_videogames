import {useState } from "react";
import Cards from "../../components/Cards/Cards";
import { useSelector } from "react-redux";
import Paginated from "../../components/Paginated/Paginated";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGenres, getAllVideogames } from "../../redux/actions";
import Filter from "../../components/Filter/Filter";
import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./Home.module.css"



const Home = ()=>{
    const videogames = useSelector((state)=> state.videogames)
    const [currentPage, setCurrentPage] = useState(1)
    const videogamesPerPage= 15
    const indexOfLastVideogame = currentPage * videogamesPerPage
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    const currentVideogames = videogames?.slice(indexOfFirstVideogame,indexOfLastVideogame)
    console.log(currentVideogames)
    const paginated =(pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllVideogames())
        dispatch(getAllGenres())
    },[dispatch])



    return(
        <div className={style.container}>
            <SearchBar/>
            <Filter paginated={paginated}/>
            <Paginated currentPage={currentPage} paginated={paginated} videogamesPerPage={videogamesPerPage } videogames={videogames.length}/>
            <Cards currentVideogames={currentVideogames}/>
        </div>
    )
}


export default Home;