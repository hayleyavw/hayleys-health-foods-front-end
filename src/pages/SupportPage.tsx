import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { StyledHeadingOne } from '../components/common/Headings.styled'

const SupportPage: React.FC = () => {
    return (
        <div className="container">
            <Nav />
            <StyledHeadingOne>Support</StyledHeadingOne>
        </div>
    )
}

export default SupportPage
