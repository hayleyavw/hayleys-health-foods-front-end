import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { RecipeList } from '../components/RecipeList/RecipeList'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { HomePagePromoCardRow } from '../components/HomePagePromoCardRow/HomePagePromoCardRow'
import { LatestRecipeList } from '../components/RecipeList/LatestRecipeList'
import Helmet from 'react-helmet'
import { jsonld } from '../components/common/jsonld'

const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <script type="application/ld+json">{jsonld}</script>
            </Helmet>
            <Hero
                isHomePage={true}
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
