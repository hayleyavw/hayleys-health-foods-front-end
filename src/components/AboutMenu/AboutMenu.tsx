import React from 'react'
import { StyledAboutMenu, StyledMenuItems } from './AboutMenu.styled'

export const AboutMenu: React.FC = () => {
    return (
        <StyledAboutMenu>
            <StyledMenuItems to={'/about'}>Welcome</StyledMenuItems>
            <StyledMenuItems to={'/about/gut-health'}>Gut Health</StyledMenuItems>
            <StyledMenuItems to={'/about/my-story'}>My Story</StyledMenuItems>
            <StyledMenuItems to={'/about/contact'}>Contact</StyledMenuItems>
            <StyledMenuItems to={'/about/support'}>Support</StyledMenuItems>
        </StyledAboutMenu>
    )
}
