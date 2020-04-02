import React from 'react'
import { StyledHeadingOne } from '../../components/common/Headings.styled'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'
import { StyledContentBox } from '../../components/common/ContentBox.styled'

const ContactPage: React.FC = () => {
    return (
        <StyledContentBox>
            <AboutMenu></AboutMenu>
            <StyledHeadingOne>Contact</StyledHeadingOne>
        </StyledContentBox>
    )
}

export default ContactPage
