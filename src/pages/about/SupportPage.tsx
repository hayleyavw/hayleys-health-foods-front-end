import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import { StyledHeadingOne } from '../../components/common/Headings.styled'
import { Footer } from '../../components/Footer/Footer'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'

const SupportPage: React.FC = () => {
    return (
        <React.Fragment>
            <Nav />
            <AboutMenu />
            <StyledHeadingOne>Support</StyledHeadingOne>
            <Footer />
        </React.Fragment>
    )
}

export default SupportPage
