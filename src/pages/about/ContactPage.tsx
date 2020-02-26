import React from 'react'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'
import { StyledHeadingOne } from '../../components/common/Headings.styled'

const ContactPage: React.FC = () => {
    return (
        <React.Fragment>
            <AboutMenu></AboutMenu>
            <StyledHeadingOne>Contact</StyledHeadingOne>
        </React.Fragment>
    )
}

export default ContactPage
