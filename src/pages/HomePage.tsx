import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { RecipeList } from '../components/RecipeList/RecipeList'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { HomePagePromoCardRow } from '../components/HomePagePromoCardRow/HomePagePromoCardRow'
import { LatestRecipeList } from '../components/RecipeList/LatestRecipeList'
import Helmet from 'react-helmet'
import { jsonld } from '../components/common/jsonld'
import { TagObject } from '../api/recipes/ResponseShapes'
import { StyledAllRecipesHeading } from '../components/FilterButtons/FilterButtons.styled'
import { FilterButtons } from '../components/FilterButtons/FilterButtons'

interface Props {}

interface State {
    tags: TagObject[] | null
}
class HomePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        tags: null,
    }

    constructor(props: Props) {
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler(tags: TagObject[]) {
        this.setState({
            tags: tags,
        })
        const yOffset = -10
        const element = document.getElementsByClassName('recipe-list')[0]
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <script type="application/ld+json">{jsonld}</script>
                </Helmet>
                <Hero
                    isHomePage={true}
                    title={"Hayley's Health Foods"}
                    subtitle={'Recipes Designed with Gut Health in Mind.'}
                    handler={this.handler}
                ></Hero>
                <StyledHeadingTwo>Latest Recipes</StyledHeadingTwo>
                <LatestRecipeList />
                <HomePagePromoCardRow />
                <StyledAllRecipesHeading>
                    <StyledHeadingTwo>All Recipes</StyledHeadingTwo>
                    <FilterButtons />
                </StyledAllRecipesHeading>
                <RecipeList tags={this.state.tags} />
            </React.Fragment>
        )
    }
}

export default HomePage
