import React from 'react'
import { StyledHeadingOne } from '../../components/common/Headings.styled'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'
import { StyledAboutWrapper } from '../../components/CommonAbout/AboutWrapper.styled'

const ContactPage: React.FC = () => {
    return (
        <StyledAboutWrapper>
            <AboutMenu></AboutMenu>
            <StyledHeadingOne>Contact</StyledHeadingOne>
        </StyledAboutWrapper>
    )
}

export default ContactPage
