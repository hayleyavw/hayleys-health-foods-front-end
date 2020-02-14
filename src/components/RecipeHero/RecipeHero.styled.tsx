import styled from '@emotion/styled'
import { margins } from '../styling/margin'
import { StyledHeadingOne } from '../common/Headings.styled'
import { colours } from '../styling/colours'
import { calcRem } from '../styling/styling-utils/calc-rem'

export const StyledRecipeHero = styled('div')({
    height: '70vh',
    position: 'relative',
    textAlign: 'center',
    color: colours.white,
    borderTop: `1px solid ${colours.white}`,
    borderBottom: `1px solid ${colours.white}`,
})

export const StyledRecipeHeroWrapper = styled('div')({
    margin: `0 -${margins.leftAndRightMargins}`,
})

export const StyledRecipeHeroImage = styled('img')({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'top right',
})

export const StyledRecipeHeadingWrapper = styled('div')({
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
})
export const StyledRecipeHeroHeading = styled(StyledHeadingOne)({
    fontSize: '7rem',
    color: colours.white,
    textShadow: `${calcRem(4)} ${calcRem(4)} ${calcRem(1)} rgba(0,0,0,0.8)`,
    // (offset-x offset-y blur-radius spread-radius color)
})
