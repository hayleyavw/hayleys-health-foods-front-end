import React from "react";
import { StyledHero, StyledHeroImage } from "./Hero.styled";

export class Hero extends React.Component {
    render() {
        const heroImage = require('./heroImages/cake-banner.jpg')
        return (
            <StyledHero>
                <StyledHeroImage src={heroImage}></StyledHeroImage>
            </StyledHero>
        )
    }
}