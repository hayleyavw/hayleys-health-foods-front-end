import styled from '@emotion/styled'
import { margins } from '../styling/margin'
import { StyledHeadingOne, StyledHeadingThree } from '../common/Headings.styled'
import { colours } from '../styling/colours'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { gradients } from '../styling/gradients'

export const StyledHero = styled('div')({
    height: '70vh',
    position: 'relative',
    textAlign: 'center',
    color: colours.white,
    borderTop: `1px solid ${colours.white}`,
    borderBottom: `1px solid ${colours.white}`,
})

export const StyledHeroWrapper = styled('div')({
    margin: `0 -${margins.bodyLeftRightMargin}`,
})

export const StyledHeroGradientLine = styled('div')({
    height: '20px',
    background: gradients.primary_to_accent,
})
export const StyledHeroImage = styled('img')({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'top right',
})

export const StyledHeadingWrapper = styled('div')({
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
})
export const StyledHeroHeading = styled(StyledHeadingOne)({
    fontSize: '7rem',
    color: colours.white,
    textShadow: `${calcRem(4)} ${calcRem(4)} ${calcRem(1)} rgba(0,0,0,0.8)`,
    // (offset-x offset-y blur-radius spread-radius color)
})

export const StyledSubtitle = styled(StyledHeadingThree)({
    textShadow: `${calcRem(2)} ${calcRem(2)} ${calcRem(1)} rgba(0,0,0,0.8)`,
})
