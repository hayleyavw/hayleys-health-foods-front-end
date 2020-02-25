import React from 'react'
import { MainHero } from '../components/Hero/Hero/MainHero'
import { RecipeList } from '../components/RecipeList/RecipeList'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { LatestRecipeList } from '../components/RecipeList/LatestRecipeList'
import { HomePagePromoCardRow } from '../components/HomePagePromoCardRow/HomePagePromoCardRow'
import { Footer } from '../components/Footer/Footer'

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <Nav isHomePage={true} />
            <MainHero></MainHero>
            <StyledHeadingTwo>Latest Recipes</StyledHeadingTwo>
            <LatestRecipeList></LatestRecipeList>
            <HomePagePromoCardRow />
            <StyledHeadingTwo>Recipes</StyledHeadingTwo>
            <RecipeList />
            <Footer />
        </div>
    )
}

export default HomePage
