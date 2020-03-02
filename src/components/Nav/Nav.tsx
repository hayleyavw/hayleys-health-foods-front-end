import React from 'react'
import { useLocation } from 'react-router'
import { StyledNav, StyledNavItem, StyledNavColumn, StyledNavLogo } from './Nav.styled'

export const Nav: React.FC = () => {
    const isHomePage = useLocation().pathname === '/'
    return (
        <StyledNav>
            <StyledNavColumn>
                <StyledNavLogo isHomePage={isHomePage} to={'/'}>
                    Hayley's Health Foods
                </StyledNavLogo>
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
