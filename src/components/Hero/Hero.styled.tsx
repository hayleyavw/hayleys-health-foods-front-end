import styled from '@emotion/styled'
import { colours } from '../styling/colours'
import { calcRem } from '../styling/styling-utils/calcRem'
import { StyledHeadingOne, StyledHeadingThree } from '../common/Headings.styled'
import { margins } from '../styling/margin'
import { breakpoint } from '../styling/styling-utils/breakpoints'
import { gradients } from '../styling/gradients'

interface StyledHeroProps {
    hasSubtitle?: boolean
    isHomePage?: boolean
}

export const StyledHeroWrapper = styled('div')({})

export const StyledHeroHeadingWrapper = styled('div')<StyledHeroProps>(({ hasSubtitle }) => ({
    position: 'absolute',
    top: hasSubtitle ? '40%' : '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    width: '90%',
}))

export const StyledHeroHeading = styled(StyledHeadingOne)({
    fontSize: calcRem(60),
    color: colours.white,
    textShadow: `${calcRem(4)} ${calcRem(4)} ${calcRem(1)} rgba(0,0,0,0.8)`,

    [breakpoint('sm')]: {
        fontSize: calcRem(80),
    },

    [breakpoint('md')]: {
        fontSize: calcRem(110),
    },
})

export const StyledSubtitle = styled(StyledHeadingThree)({
    textShadow: `${calcRem(2)} ${calcRem(2)} ${calcRem(1)} rgba(0,0,0,0.8)`,
    fontSize: calcRem(25),

    [breakpoint('sm')]: {
        fontSize: calcRem(30),
    },

    [breakpoint('md')]: {
        fontSize: calcRem(35),
    },
})

export const StyledHeroImage = styled('img')<StyledHeroProps>(({ isHomePage }) => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: isHomePage ? 'top right' : undefined,
}))

export const StyledHero = styled('div')<StyledHeroProps>(({ hasSubtitle }) => ({
    height: hasSubtitle ? '70vh' : '60vh',
    position: 'relative',
    textAlign: 'center',
    color: colours.white,
    borderTop: `1px solid ${colours.white}`,
    borderBottom: `1px solid ${colours.white}`,
    margin: `0 -${margins.bodyLeftRightMargin.sm}`,
}))

export const StyledHeroGradientLine = styled('div')({
    height: calcRem(20),
    background: gradients.primary_to_accent,
    margin: `0 -${margins.bodyLeftRightMargin.sm}`,
})
