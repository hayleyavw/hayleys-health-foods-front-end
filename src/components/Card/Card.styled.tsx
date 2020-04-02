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

    '&:hover': {
        img: {
            height: '60%',
        },
        '.card-text-wrapper': {
            height: '40% !important',
        },
        '.card-description': {
            display: 'block !important',
        },
    },

    [breakpoint('sm')]: {
        height: calcRem(300),
    },
})

export const StyledCardImage = styled('img')({
    width: '100%',
    objectFit: 'cover',
    height: '71%',

    [breakpoint('sm')]: {
        height: '81%',
    },
})

export const StyledCardTextWrapper = styled('div')({
    position: 'absolute',
    fontSize: calcRem(14),
    width: '100%',
    minHeight: '30%',
    margin: 0,
    bottom: 0,
    padding: calcRem(0, 10),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: colours.white,
    background: gradients.primary_to_accent,

    '&:hover .card-titles': {
        textDecoration: 'underline',
    },

    p: {
        margin: 0,
    },

    [breakpoint('sm')]: {
        minHeight: '20%',
        fontSize: calcRem(19),
    },
})

export const StyledCardTitleWrapper = styled('div')({})

export const StyledCardTitle = styled('p')({})

export const StyledCardSubtitle = styled('p')({
    fontSize: calcRem(14),
})

export const StyledCardDescription = styled('p')({
    display: 'none',
    fontSize: calcRem(14),
})
