import React from 'react'
import { jsonld } from '../common/jsonld'
import Helmet from 'react-helmet'
import { StyledContentBox } from '../common/ContentBox.styled'
import {
    StyledErrorPage,
    StyledErrorHeading,
    StyledErrorParagraph,
    StyledRow,
} from './ErrorPage.styled'
import { Card } from '../Card/Card'

const ErrorPage: React.FC = () => {
    const recipeImage = require('./assets/recipes.jpg')
    const aboutImage = require('./assets/about.jpg')
    return (
        <StyledErrorPage>
            <Helmet>
                <script type="application/ld+json">{jsonld}</script>
            </Helmet>
            <StyledContentBox>
                <StyledErrorHeading>Hmmm, I can't seem to find that page...</StyledErrorHeading>
                <StyledErrorParagraph>
                    ...but here are some other things to check out while you are here.
                </StyledErrorParagraph>
                <StyledRow>
                    <Card
                        url="/"
                        title="Recipes"
                        description="Check out all my recipes, each and everyone designed with gut health in mind."
                        thumbnail={recipeImage}
                        page="Error Page"
                    />
                    <Card
                        url="/about"
                        title="About and Support"
                        description="Ready about what inspired this project and how you can help me to keep making awesome things!"
                        thumbnail={aboutImage}
                        page="Error Page"
                    />
                </StyledRow>
            </StyledContentBox>
        </StyledErrorPage>
    )
}

export default ErrorPage
