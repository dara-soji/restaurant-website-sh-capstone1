import React from "react";
import Header from "../../components/header/header";
import './home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
        <Header />
            <div className="jumbotron hero">
                    <h1 className="display-4">Welcome</h1>
                    <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                    pariatur quia sequi, dicta vero aut ab quasi dolorum repudiandae.
                    Velit maiores magnam animi asperiores illo voluptatibus repudiandae
                    accusamus recusandae similique.
                    </p>                    
                    <Link class="btn btn-danger btn-lg" to="/products" role="button">Explore</Link>
            </div>
        </div>
    );
}
export default Home;