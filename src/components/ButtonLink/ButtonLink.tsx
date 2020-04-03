import React from 'react'
import { StyledButtonLink, StyledButtonLinkImage, StyledButtonLinkText } from './ButtonLink.styled'

interface ButtonLinkProps {
    href: string
    newTab?: boolean
    image: {
        src: string
        alt: string
    }
    buttonText: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, newTab, image, buttonText }) => {
    return (
        <StyledButtonLink target={newTab ? '_blank' : ''} href={href}>
            <StyledButtonLinkImage src={image.src} alt={image.alt} />
            <StyledButtonLinkText>{buttonText}</StyledButtonLinkText>
        </StyledButtonLink>
    )
}
