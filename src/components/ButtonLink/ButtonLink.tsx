import React from 'react'
import { StyledButtonLink, StyledButtonLinkImage, StyledButtonLinkText } from './ButtonLink.styled'

interface ButtonLinkProps {
    href: string
    image: {
        src: string
        alt: string
    }
    buttonText: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, image, buttonText }) => {
    return (
        <StyledButtonLink target="_blank" href={href}>
            <StyledButtonLinkImage src={image.src} alt={image.alt} />
            <StyledButtonLinkText>{buttonText}</StyledButtonLinkText>
        </StyledButtonLink>
    )
}
