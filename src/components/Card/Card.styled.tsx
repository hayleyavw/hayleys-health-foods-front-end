import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { colours } from '../styling/colours'
import { gradients } from '../styling/gradients'
import { cardBorderRadius } from '../styling/borders'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledCard = styled('div')({
    height: calcRem(150),
    flex: ' 1 0 21%',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    borderRadius: cardBorderRadius,
    transition: '0.5s',

    '&:hover': {
        img: {
            height: '60%',
            transition: '0.5s',
        },
        '.card-text-wrapper': {
            height: '40% !important',
            transition: '0.5s',
        },
        '.card-description': {
            display: 'block !important',
            transition: '0.5s',
        },
    },

    [breakpoint('sm')]: {
        height: calcRem(300),
    },
})

export const StyledCardImage = styled('img')({
    width: '100%',
    objectFit: 'cover',
    height: '80%',
    transition: '0.5s',
})

export const StyledCardTitleWrapper = styled('div')({
    position: 'absolute',
    fontSize: calcRem(19),
    width: '100%',
    height: '20%',
    margin: 0,
    bottom: 0,
    color: colours.white,
    background: gradients.primary_to_accent,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    transition: '0.5s',

    '&:hover': {
        textDecoration: 'underline',
    },

    p: {
        margin: 0,
    },
})

export const StyledCardTitle = styled('p')({
    transition: '0.5s',
})

export const StyledCardDescription = styled('p')({
    display: 'none',
    fontSize: calcRem(16),
    transition: '0.5s',
})
