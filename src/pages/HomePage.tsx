import React from 'react'
import { MainHero } from '../components/Hero/Hero/MainHero'
import { RecipeList } from '../components/RecipeList/RecipeList'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { HomePagePromoCardRow } from '../components/HomePagePromoCardRow/HomePagePromoCardRow'
import { LatestRecipeList } from '../components/RecipeList/LatestRecipeList'

const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <MainHero></MainHero>
            <StyledHeadingTwo>Latest Recipes</StyledHeadingTwo>
            <LatestRecipeList />
            <HomePagePromoCardRow />
            <StyledHeadingTwo>All Recipes</StyledHeadingTwo>
            <RecipeList />
        </React.Fragment>
    )
}

export default HomePage
