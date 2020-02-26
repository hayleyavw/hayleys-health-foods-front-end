import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingOne } from '../components/common/Headings.styled'
import { Footer } from '../components/Footer/Footer'

const SupportPage: React.FC = () => {
    return (
        <React.Fragment>
            <Nav />
            <StyledHeadingOne>Support</StyledHeadingOne>
            <Footer />
        </React.Fragment>
    )
}

export default SupportPage
