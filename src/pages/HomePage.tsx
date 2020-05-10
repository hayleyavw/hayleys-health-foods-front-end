import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { RecipeList } from '../components/RecipeList/RecipeList'
import { StyledHeadingTwo } from '../components/common/Headings.styled'
import { HomePageButtonLinkRow } from '../components/ButtonLinkRow/HomePageButtonLinkRow'
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
        let gf_state = reset ? false : this.state.gf
        let df_state = reset ? false : this.state.df
        let nf_state = reset ? false : this.state.nf
        let vege_state = reset ? false : this.state.vege
        let vegan_state = reset ? false : this.state.vegan

        switch (tag) {
            case 'gf':
                gf_state = gf_state ? false : true
                break
            case 'df':
                df_state = df_state ? false : true
                break
            case 'nf':
                nf_state = nf_state ? false : true
                break
            case 'vege':
                vege_state = vege_state ? false : true
                break
            case 'vegan':
                vegan_state = vegan_state ? false : true
                break
            default:
                break
        }

        this.setState({ gf: gf_state })
        this.setState({ df: df_state })
        this.setState({ nf: nf_state })
        this.setState({ vege: vege_state })
        this.setState({ vegan: vegan_state })

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
                <HomePageButtonLinkRow />
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
