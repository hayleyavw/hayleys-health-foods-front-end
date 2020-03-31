import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { colours } from '../styling/colours'
import { gradients } from '../styling/gradients'
import { cardBorderRadius } from '../styling/borders'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledRecipeCard = styled('div')({
    height: calcRem(150),
    flex: ' 1 0 21%',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    borderRadius: cardBorderRadius,
    '&:hover': {
        p: {
            opacity: 1,
            bottom: 0,
            transition: 'bottom 0.5s',
        },
    },

    [breakpoint('sm')]: {
        height: calcRem(300),
    },
})

export const StyledRecipeCardImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: '0.5s',
    '&:hover': {
        height: `calc(100% - ${calcRem(24)})`,
        transition: '0.5s',
    },
})

export const StyledRecipeCardTitleOverlay = styled('p')({
    position: 'absolute',
    fontSize: '1.2rem',
    width: '100%',
    height: '20%',
    margin: 0,
    bottom: calcRem(-24),
    color: colours.white,
    background: gradients.primary_to_accent,
    opacity: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.25s',
    '&:hover': {
        textDecoration: 'underline',
    },
})
