import { Link } from 'react-router-dom';
import Planet from "../../models/Planet";
import "./assets/book.css"

type Props = {planets: Planet[]}

function PlanetNav({ planets } :Props) {

    return (
        <section className="homepage">
        <nav>
            {
                planets.map((book,index) => {
                    return <Link key={book.id} to={"/products/" + book.id} style={{backgroundColor:book.color}} className={"book-link"}>{book.title}</Link>
                    // return <Link to={"/products/" + book.id}> {book.title}</Link>
                })
            }
        </nav>
        </section>
    )
}

export default PlanetNav;