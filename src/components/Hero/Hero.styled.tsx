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

export const StyledHeroHeading = styled(StyledHeadingOne)<StyledHeroProps>(({ isHomePage }) => ({
    fontSize: isHomePage ? calcRem(60) : calcRem(40),
    color: colours.white,
    textShadow: `${calcRem(4)} ${calcRem(4)} ${calcRem(1)} rgba(0,0,0,0.8)`,

    [breakpoint('sm')]: {
        fontSize: isHomePage ? calcRem(80) : calcRem(50),
    },

    [breakpoint('md')]: {
        fontSize: isHomePage ? calcRem(110) : calcRem(70),
    },

    [breakpoint('lg')]: {
        fontSize: isHomePage ? undefined : calcRem(90),
    },
}))

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

export const StyledTagsWrapper = styled('div')({
    marginTop: calcRem(10),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
})

export const StyledHeroImage = styled('img')<StyledHeroProps>(({ isHomePage }) => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: isHomePage ? 'top' : undefined,
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

export const StyledRecipeInfoWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    color: colours.black,
})

export const StyledRecipeInfo = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginTop: calcRem(10),
})

export const StyledRecipeYield = styled('div')({
    display: 'flex',
    alignItems: 'center',
    margin: calcRem(2),
    padding: calcRem(6),
    borderRadius: calcRem(3),
    backgroundColor: colours.offWhite,
    color: colours.black,
    opacity: 0.8,

    img: {
        height: calcRem(50),
        width: 'auto',
        display: 'block',
        marginRight: calcRem(2),
    },

    p: {
        margin: calcRem(1),
        '&.recipe-info-heading': {
            fontWeight: 'bold',
        },
    },

    [breakpoint('sm')]: {
        img: {
            display: 'none',
        },
    },
})

export const StyledRecipeYieldVertical = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    img: {
        display: 'none',
    },

    [breakpoint('sm')]: {
        alignItems: 'center',
        img: {
            display: 'block',
        },
    },
})
