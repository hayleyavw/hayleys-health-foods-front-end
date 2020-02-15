import styled from '@emotion/styled'
import { colours } from '../styling/colours'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { StyledHeadingOne } from '../common/Headings.styled'
import { margins } from '../styling/margin'

interface StyledHeroProps {
    isMainHero?: boolean
}

export const StyledHeroHeadingWrapper = styled('div')({
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    width: '90%',
})

export const StyledHeroHeading = styled(StyledHeadingOne)({
    fontSize: '7rem',
    color: colours.white,
    textShadow: `${calcRem(4)} ${calcRem(4)} ${calcRem(1)} rgba(0,0,0,0.8)`,
})

export const StyledHeroImage = styled('img')<StyledHeroProps>(({ isMainHero }) => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: isMainHero ? 'top right' : undefined,
}))

export const StyledHero = styled('div')<StyledHeroProps>(({ isMainHero }) => ({
    height: isMainHero ? '70vh' : '100vh',
    position: 'relative',
    textAlign: 'center',
    color: colours.white,
    borderTop: `1px solid ${colours.white}`,
    borderBottom: `1px solid ${colours.white}`,
    margin: isMainHero ? undefined : `0 -${margins.bodyLeftRightMargin}`,
}))
