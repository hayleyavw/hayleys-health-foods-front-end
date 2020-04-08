import React from 'react'
import { jsonld } from '../common/jsonld'
import Helmet from 'react-helmet'
import { StyledContentBox } from '../common/ContentBox.styled'
import { StyledLoadingAnimation, StyledLoadingWrapper } from './LoadingPage.styled'
import { StyledHeadingOne } from '../common/Headings.styled'

const LoadingPage: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <script type="application/ld+json">{jsonld}</script>
            </Helmet>
            <StyledContentBox>
                <StyledLoadingWrapper>
                    <StyledHeadingOne>Loading...</StyledHeadingOne>
                    <StyledLoadingAnimation>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </StyledLoadingAnimation>
                </StyledLoadingWrapper>
            </StyledContentBox>
        </React.Fragment>
    )
}

export default LoadingPage
