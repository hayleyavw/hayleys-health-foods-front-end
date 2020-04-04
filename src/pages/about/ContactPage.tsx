import React from 'react'
import { StyledHeadingOne } from '../../components/common/Headings.styled'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'
import { StyledContentBox } from '../../components/common/ContentBox.styled'
import Helmet from 'react-helmet'
import { jsonld } from '../../components/common/jsonld'

const ContactPage: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <script type="application/ld+json">{jsonld}</script>
            </Helmet>
            <StyledContentBox>
                <AboutMenu></AboutMenu>
                <StyledHeadingOne>Contact</StyledHeadingOne>
            </StyledContentBox>
        </React.Fragment>
    )
}

export default ContactPage
