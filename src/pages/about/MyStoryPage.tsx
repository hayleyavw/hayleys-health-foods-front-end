import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'
import { StyledHeadingOne } from '../../components/common/Headings.styled'
import { Footer } from '../../components/Footer/Footer'

const MyStoryPage: React.FC = () => {
    return (
        <React.Fragment>
            <Nav />
            <AboutMenu></AboutMenu>
            <StyledHeadingOne>My Story</StyledHeadingOne>
            <Footer />
        </React.Fragment>
    )
}

export default MyStoryPage
