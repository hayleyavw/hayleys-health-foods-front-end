import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { RecipeList } from '../components/RecipeList/RecipeList'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { HomePagePromoCardRow } from '../components/HomePagePromoCardRow/HomePagePromoCardRow'
import { LatestRecipeList } from '../components/RecipeList/LatestRecipeList'
import Helmet from 'react-helmet'
import { jsonld } from '../components/common/jsonld'
import { StyledAllRecipesHeading } from '../components/FilterButtons/FilterButtons.styled'
import { FilterButtons } from '../components/FilterButtons/FilterButtons'

interface Props {}

interface State {
    gf: boolean
    df: boolean
    nf: boolean
    vege: boolean
    vegan: boolean
}
class HomePage extends React.Component<Props> {
    public readonly state: Readonly<State> = {
        gf: false,
        df: false,
        nf: false,
        vege: false,
        vegan: false,
    }

    constructor(props: Props) {
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler(reset: boolean, tag: string, scroll: boolean) {
        if (reset) {
            this.setState({ gf: false })
            this.setState({ df: false })
            this.setState({ nf: false })
            this.setState({ vege: false })
            this.setState({ vegan: false })
        }
        let status: boolean
        switch (tag) {
            case 'gf':
                status = this.state.gf
                this.setState({ gf: status ? false : true })
                break
            case 'df':
                status = this.state.df
                this.setState({ df: status ? false : true })
                break
            case 'nf':
                status = this.state.nf
                this.setState({ nf: status ? false : true })
                break
            case 'vege':
                status = this.state.vege
                this.setState({ vege: status ? false : true })
                break
            case 'vegan':
                status = this.state.vegan
                this.setState({ vegan: status ? false : true })
                break
            default:
                break
        }
        if (scroll) {
            const yOffset = -10
            const element = document.getElementsByClassName('recipe-list')[0]
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    render() {
        const tagStatus = {
            gf: this.state.gf,
            df: this.state.df,
            nf: this.state.nf,
            vege: this.state.vege,
            vegan: this.state.vegan,
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
                <StyledAllRecipesHeading>
                    <StyledHeadingTwo>All Recipes</StyledHeadingTwo>
                    <FilterButtons handler={this.handler} tagStatus={tagStatus} />
                </StyledAllRecipesHeading>
                <RecipeList tagStatus={tagStatus} />
            </React.Fragment>
        )
    }
}

export default HomePage
