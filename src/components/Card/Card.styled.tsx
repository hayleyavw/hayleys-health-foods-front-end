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
            height: '61%',
            transition: '0.5s',
        },
        '.card-text-wrapper': {
            height: '40% !important',
            transition: 'height 0.5s',
            justifyContent: 'start',
        },
        '.card-titles': {
            transition: '0.5s',
        },
        '.card-description': {
            height: '100%',
            visibility: 'visible',
            opacity: 1,
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
    height: '71%',

    [breakpoint('sm')]: {
        height: '81%',
    },
})

export const StyledCardTextWrapper = styled('div')({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '30%',
    bottom: 0,
    padding: calcRem(0, 10),
    boxSizing: 'border-box',
    color: colours.white,
    background: gradients.primary_to_accent,
    fontSize: calcRem(14),

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

export const StyledCardTitleWrapper = styled('div')({
    margin: calcRem(10, 0),
})

export const StyledCardTitle = styled('p')({})

export const StyledCardSubtitle = styled('p')({
    fontSize: calcRem(14),
})

export const StyledCardDescription = styled('p')({
    height: 0,
    visibility: 'hidden',
    opacity: 0,
    fontSize: calcRem(14),
})
