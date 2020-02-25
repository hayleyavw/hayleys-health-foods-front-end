import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingOne } from '../components/common/Headings.styled'
import { Footer } from '../components/Footer/Footer'

const SupportPage: React.FC = () => {
    return (
        <div className="container">
            <Nav />
            <StyledHeadingOne>Support</StyledHeadingOne>
            <Footer />
        </div>
    )
}

export default SupportPage
