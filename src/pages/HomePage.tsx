import React from 'react'
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <h1>Home Page</h1>
            <p>
            Recipes listed here.
            </p>
            <Link to="/blog">Blog</Link>
        </div>
    )
}

export default HomePage;