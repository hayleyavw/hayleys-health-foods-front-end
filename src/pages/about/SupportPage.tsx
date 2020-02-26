import React from 'react'
import { StyledHeadingOne } from '../../components/common/Headings.styled'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'

const SupportPage: React.FC = () => {
    return (
        <React.Fragment>
            <AboutMenu />
            <StyledHeadingOne>Support</StyledHeadingOne>
        </React.Fragment>
    )
}

export default SupportPage
