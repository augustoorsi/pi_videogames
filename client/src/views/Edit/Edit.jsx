import { useLocation } from "react-router-dom"
import style from "./Edit.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editVideogame, getAllVideogames} from "../../redux/actions";
import validate from "./validate";
import getDetail from "../Detail/getDetail";

const Edit = () => {
    const { pathname } = useLocation()
    const id = pathname.slice(6)
    const dispatch = useDispatch()
    const allGenres = useSelector((state) => state.genres)
    const videogames = useSelector((state) => state.videogames)

    const [videogame, setVideogame] = useState({})

    const [errors, setErrors] = useState({})
    
    const [videogameEdited, setEditVideogame] = useState({
    name: "",
        image: "",
        description: "",
        platforms: [],
        released: "",
        genres: [],
        rating: ""
    })

    const videogameDetail = async () => {
        const detail = await getDetail(id)
        console.log(detail);
        setVideogame(detail)
        setEditVideogame({...detail, genres: detail.genres.map(genre=>genre.name)})
    }
    
    useEffect(() => {
        videogameDetail();
    }, [id]);
    


    const platformsArray = ["PC", "PS4", "PS5", "XBOX 360", "XBOX SERIES", "SWITCH"]

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setEditVideogame({ ...videogameEdited, [name]: value })
        setErrors(validate({ ...videogameEdited, [name]: value }, videogames))
        console.log(videogameEdited);
    }
    const handleGenres = (event) => {
        const value = event.target.value
        if (!videogameEdited.genres?.includes(value) && value !==""){
            setEditVideogame({ ...videogameEdited, genres: [...videogameEdited.genres, value] })
            setErrors(validate({ ...videogameEdited, genres: [...videogameEdited.genres, value] }, videogames))
            }
            console.log({...videogameEdited})
    }

    const handlePlatforms = (event) => {
        const value = event.target.value
            if (!videogameEdited.platforms?.includes(value) && value !==""){
                setEditVideogame({ ...videogameEdited, platforms: [...videogameEdited.platforms, value] })
                setErrors(validate({ ...videogameEdited, platforms: [...videogameEdited.platforms, value] }, videogames))
            }
            console.log(videogameEdited)
    }

    const handleDeletePlatform = (event)=>{
        const value = event.target.innerText
        console.log(videogameEdited.platforms?.filter(platform=> platform !== value));
        setEditVideogame({...videogameEdited, platforms:[...videogameEdited.platforms?.filter(platform=> platform !== value)]})
    }

    const handleDeleteGenre = (event)=>{
        const value = event.target.innerText
        console.log(videogame);
        console.log(videogameEdited.genres?.filter(genre=> genre !== value));
        setEditVideogame({...videogameEdited, genres:[...videogameEdited.genres?.filter(genre=> genre !== value)]})
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(validate(videogameEdited, videogames))
        console.log(errors);
        if (!(errors.name || errors.image || errors.description || errors.platforms || errors.rating || errors.genres)) {
            dispatch(editVideogame(id,videogameEdited))
            dispatch(getAllVideogames())
            setEditVideogame({
                name: "",
                image: "",
                description: "",
                platforms: [],
                released: "",
                genres: [],
                rating: ""
            })
        }
        else alert("Null or invalid information")
    }

    return (
        <div className={style.container}>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label name="NAME">
                    NAME:
                    <input onChange={(event) => handleChange(event)} type="text"  name="name" value={videogameEdited.name} />
                </label>
                {errors.name && <spam>{errors.name}</spam>}
                <br />
                <label name="IMAGE">
                    IMAGE:
                    <input onChange={(event) => handleChange(event)} type="text" placeholder={videogame.image} name="image" value={videogameEdited.image} />
                </label>
                {errors.image && <spam>{errors.image}</spam>}
                <br />
                <label name="DESCRIPTION">
                    DESCRIPTION:
                    <input onChange={(event) => handleChange(event)} type="text" placeholder={videogame.description} name="description" value={videogameEdited.description} />
                </label>
                {errors.description && <spam>{errors.description}</spam>}
                <br />
                <label name="PLATFORMS">
                    PLATFORMS:
                    <select onChange={(event) => handlePlatforms(event)} name="platforms">
                        <option></option>
                        {platformsArray.map(platform => <option key={platform} name={platform}> {platform}</option>)}
                    </select>
                    {videogameEdited.platforms?.map(platform => <p data={platform} onClick={(event)=>handleDeletePlatform(event)} key={platform}>{platform}</p>)}
                </label>
                {errors.platforms && <spam>{errors.platforms}</spam>}
                <br />
                <label name="RELEASED">
                    RELEASED:
                    <input  onChange={(event) => handleChange(event)} name="released" value={videogameEdited.released} type="date" />
                    {videogame.released?.slice(0,10)} 
                </label>
                {errors.released && <spam>{errors.released}</spam>}
                <br />
                <label name="RATING">
                    RATING:
                    <input placeholder={videogame.rating} onChange={(event) => handleChange(event)} name="rating" value={videogameEdited.rating} type="text" />
                </label>
                {errors.rating && <spam>{errors.rating}</spam>}
                <br />
                <label name="GENRES">
                    GENRES:
                    <select onChange={(event) => handleGenres(event)} name="genres">
                        <option></option>
                        {allGenres?.map(genre => <option name={genre} key={genre} >{genre}</option>)}
                    </select>
                </label>
                {videogameEdited.genres?.map(genre => <p data={genre} onClick={(event)=>handleDeleteGenre(event)} key={genre}>{genre}</p>)}
                {errors.genres && <spam>{errors.genres}</spam>}
                <br />
                <label name="SUBMIT">
                    <button>EDIT</button>
                </label>
            </form>
        <div className={style.container2}>
            {<h1>Este es el edit del videogame: {videogame.name}</h1>}
            <img className={style.img} src={videogame.image}/>
        </div>
        </div>
    )
}

export default Edit;