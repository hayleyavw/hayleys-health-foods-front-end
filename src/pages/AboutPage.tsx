import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingOne } from '../components/common/Headings.styled'
import { Footer } from '../components/Footer/Footer'

const AboutPage: React.FC = () => {
    return (
        <React.Fragment>
            <Nav />
            <StyledHeadingOne>About</StyledHeadingOne>
            <Footer />
        </React.Fragment>
    )
}

export default AboutPage
