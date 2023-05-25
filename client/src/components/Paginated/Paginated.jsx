import { useState, useEffect } from "react";
import style from "./Paginated.module.css";

const Paginated = ({ paginated, videogamesPerPage, videogames, currentPage }) => {
    const [activePage, setActivePage] = useState(currentPage);

    useEffect(() => {
        setActivePage(currentPage);
    }, [currentPage]);

    const pageNumbers = Math.ceil(videogames / videogamesPerPage);
    const pages = [];

    for (let i = 1; i <= pageNumbers; i++) {
        pages.push(i);
    }

    return (
        <ul className={style.container}>
            {pages.map((page) => (
                <li
                    key={page}
                    className={`${style.item} ${activePage === page ? style.clicked : ""}`}
                    onClick={() => paginated(page)}
                >
                    {page}
                </li>
            ))}
        </ul>
    );
};

export default Paginated;
