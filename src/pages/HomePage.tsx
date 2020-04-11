import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { RecipeList } from '../components/RecipeList/RecipeList'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { HomePagePromoCardRow } from '../components/HomePagePromoCardRow/HomePagePromoCardRow'
import { LatestRecipeList } from '../components/RecipeList/LatestRecipeList'
import Helmet from 'react-helmet'
import { jsonld } from '../components/common/jsonld'
import { TagObject } from '../api/recipes/ResponseShapes'

interface Props {}

interface State {
    tags: TagObject[]
}
class HomePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        tags: [new TagObject()],
    }

    constructor(props: Props) {
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler(tags: TagObject[]) {
        this.setState({
            tags: tags,
        })
    }

    render() {
        if (this.state.tags) {
            console.log(this.state.tags)
        }
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
                <StyledHeadingTwo>All Recipes</StyledHeadingTwo>
                <RecipeList />
            </React.Fragment>
        )
    }
}

export default HomePage
