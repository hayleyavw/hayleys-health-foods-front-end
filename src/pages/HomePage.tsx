import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { RecipeList } from '../components/RecipeList/RecipeList'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { LatestRecipeList } from '../components/RecipeList/LatestRecipeList'

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <Nav />
            <Hero></Hero>
            <StyledHeadingTwo>Latest Recipes</StyledHeadingTwo>
            <LatestRecipeList></LatestRecipeList>
            <StyledHeadingTwo>Recipes</StyledHeadingTwo>
            <RecipeList />
        </div>
    )
}

export default HomePage
