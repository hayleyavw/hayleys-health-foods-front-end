import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingOne } from '../components/common/Headings.styled'
import { Footer } from '../components/Footer/Footer'
import { AboutMenu } from '../components/AboutMenu/AboutMenu'

const AboutPage: React.FC = () => {
    return (
        <React.Fragment>
            <Nav />
            <AboutMenu></AboutMenu>
            <StyledHeadingOne>Welcome</StyledHeadingOne>
            <Footer />
        </React.Fragment>
    )
}

export default AboutPage
