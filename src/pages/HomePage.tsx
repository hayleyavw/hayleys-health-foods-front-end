import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { RecipeList } from '../components/RecipeList/RecipeList'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { HomePagePromoCardRow } from '../components/HomePagePromoCardRow/HomePagePromoCardRow'
import { LatestRecipeList } from '../components/RecipeList/LatestRecipeList'

const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <Hero
                title={"Hayley's Health Foods"}
                subtitle={'Recipes Designed with Gut Health in Mind.'}
            ></Hero>
            <StyledHeadingTwo>Latest Recipes</StyledHeadingTwo>
            <LatestRecipeList />
            <HomePagePromoCardRow />
            <StyledHeadingTwo>All Recipes</StyledHeadingTwo>
            <RecipeList />
        </React.Fragment>
    )
}

export default HomePage
