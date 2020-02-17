import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingOne } from '../components/common/Headings.styled'

const AboutPage: React.FC = () => {
    return (
        <div className="container">
            <Nav />
            <StyledHeadingOne>About</StyledHeadingOne>
        </div>
    )
}

export default AboutPage
