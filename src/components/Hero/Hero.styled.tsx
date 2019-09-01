import styled from '@emotion/styled'
import { margin } from '../styling/margin'
import { StyledHeadingOne } from '../common/Headings.styled'
import { colours } from '../styling/colours'
import { calcRem } from '../styling/styling-utils/calc-rem'

export const StyledHero = styled('div')({
    margin: `-${margin.bodyMargin} -${margin.bodyMargin} 0 -${margin.bodyMargin}`,
    height: '60vh',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
})

export const StyledHeroImage = styled('img')({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'top right',
})

export const StyledHeroHeading = styled(StyledHeadingOne)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    color: colours.white,
    fontSize: '7rem',
    textShadow: `${calcRem(5)} ${calcRem(5)} ${calcRem(1)} rgba(0,0,0,0.7)`,
    // (offset-x offset-y blur-radius spread-radius color)
})
