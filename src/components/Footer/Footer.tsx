import React from 'react'
import {
    StyledFooterItem,
    StyledFooterColumn,
    StyledFooterLogo,
    StyledFooter,
} from './Footer.styled'

export class Footer extends React.Component {
    render() {
        return (
            <StyledFooter>
                <StyledFooterColumn>
                    <StyledFooterLogo to={'/'}>Hayley's Health Foods</StyledFooterLogo>
                </StyledFooterColumn>
                <StyledFooterColumn>
                    <StyledFooterItem to={'/'}>Recipes</StyledFooterItem>
                    <StyledFooterItem to={'/blog'}>Blog</StyledFooterItem>
                    <StyledFooterItem to={'/about'}>About</StyledFooterItem>
                    <StyledFooterItem to={'/about/support'}>Support</StyledFooterItem>
                </StyledFooterColumn>
            </StyledFooter>
        )
    }
}
