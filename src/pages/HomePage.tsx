import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { RecipeList } from '../components/RecipeList/RecipeList'

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <Nav />
            <Hero></Hero>
            <h1>Home Page</h1>
            <p>Recipes listed here.</p>
            <RecipeList />
        </div>
    )
}

export default HomePage
