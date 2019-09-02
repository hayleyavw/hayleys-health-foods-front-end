import React from 'react'
import { StyledNav, StyledNavItem } from './Nav.styled'

export class Nav extends React.Component {
    render() {
        return (
            <StyledNav>
                <StyledNavItem to={'/'}>Recipes</StyledNavItem>
                <StyledNavItem to={'/blog'}>Blog</StyledNavItem>
                <StyledNavItem to={'/about'}>About</StyledNavItem>
                <StyledNavItem to={'/support'}>Support</StyledNavItem>
            </StyledNav>
        )
    }
}
