import {Link} from "react-router-dom";

const Main = () => {
    return (
        <main>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
            <Link to="/reservetable" className="nav-item">Reserve a table</Link>
        </main>
    );
};

export default Main;