import style from "./Paginated.module.css"

const Paginated = ({paginated, videogamesPerPage, videogames})=>{
    
    const pageNumbers = Math.ceil(videogames/videogamesPerPage)
    const pages =[]

    for(let i=1; i <= pageNumbers; i++){
        pages.push(i)
    }
    console.log(pages);

    
    
    
    return(
            <ul className={style.container}>
                {pages &&
                pages.map(page => 
                    <li key={page} className={style.item} onClick={()=> paginated(page)}>{page} </li>)
                }
            </ul>
    )
}

export default Paginated;