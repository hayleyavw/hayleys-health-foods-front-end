import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingOne } from '../components/common/Headings.styled'
import { Footer } from '../components/Footer/Footer'

const AboutPage: React.FC = () => {
    return (
        <div className="container">
            <Nav />
            <StyledHeadingOne>About</StyledHeadingOne>
            <Footer />
        </div>
    )
}

export default AboutPage
