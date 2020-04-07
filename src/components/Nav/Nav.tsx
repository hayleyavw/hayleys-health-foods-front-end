import React from 'react'
import { StyledNav, StyledNavItem, StyledNavColumn, StyledNavLogo } from './Nav.styled'

export const Nav: React.FC = () => {
    return (
        <StyledNav>
            <StyledNavColumn>
                <StyledNavLogo to={'/'}>Hayley's Health Foods</StyledNavLogo>
            </StyledNavColumn>
            <StyledNavColumn>
                <StyledNavItem to={'/'}>Recipes</StyledNavItem>
                <StyledNavItem to={'/blog'}>Blog</StyledNavItem>
                <StyledNavItem to={'/about'}>About</StyledNavItem>
                <StyledNavItem to={'/about/support'}>Support</StyledNavItem>
            </StyledNavColumn>
        </StyledNav>
    )
}
