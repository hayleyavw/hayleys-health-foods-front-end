import React from 'react'
import { MainHero } from '../components/Hero/Hero/MainHero'
import { RecipeList } from '../components/RecipeList/RecipeList'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { LatestRecipeList } from '../components/RecipeList/LatestRecipeList'
import { HomePagePromoCardRow } from '../components/HomePagePromoCardRow/HomePagePromoCardRow'

const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <Nav isHomePage={true} />
            <MainHero></MainHero>
            <StyledHeadingTwo>Latest Recipes</StyledHeadingTwo>
            <LatestRecipeList></LatestRecipeList>
            <HomePagePromoCardRow />
            <StyledHeadingTwo>Recipes</StyledHeadingTwo>
            <RecipeList />
        </React.Fragment>
    )
}

export default HomePage
