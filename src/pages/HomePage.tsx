import React from 'react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero/Hero'
import { RecipeList } from '../components/RecipeList/RecipeList'

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <Hero></Hero>
            <h1>Home Page</h1>
            <p>Recipes listed here.</p>
            <Link to="/blog">Blog</Link>
            <RecipeList />
        </div>
    )
}

export default HomePage
