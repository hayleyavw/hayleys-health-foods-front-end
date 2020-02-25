import React from 'react'
import { StyledNav, StyledNavItem, StyledNavColumn, StyledNavLogo } from './Nav.styled'

interface NavProps {
    isHomePage?: boolean
}

export const Nav: React.FC<NavProps> = ({ isHomePage }) => {
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
                <StyledNavItem to={'/support'}>Support</StyledNavItem>
            </StyledNavColumn>
        </StyledNav>
    )
}
