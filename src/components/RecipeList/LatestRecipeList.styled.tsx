import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { calcRem } from '../styling/styling-utils/calc-rem'
import { StyledHeadingFour } from '../common/Headings.styled'
import { colours } from '../styling/colours'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledLatestRecipeList = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '250px auto 200px auto 200px auto 200px auto',
    gridGap: calcRem(10),
    gridTemplateAreas:
        "'leftImage' 'leftText' 'rightTopImage' 'rightTopText' 'rightMiddleImage' 'rightMiddleText' 'rightBottomImage' 'rightBottomText'",

    '.latest-recipe-image': {
        overflow: 'hidden',
    },

    '#latest-recipe-image-0': {
        gridArea: 'leftImage',
        '&:hover': {
            ' & ~ #latest-recipe-text-0 .latest-recipe-heading': {
                textDecoration: 'underline',
            },
            img: {
                transform: 'scale(1.2)',
                transition: '1s',
            },
        },
    },
    '#latest-recipe-image-1': {
        gridArea: 'rightTopImage',
        '&:hover': {
            '& ~ #latest-recipe-text-1 .latest-recipe-heading': {
                textDecoration: 'underline',
            },
            img: {
                transform: 'scale(1.2)',
                transition: '1s',
            },
        },
    },
    '#latest-recipe-image-2': {
        gridArea: 'rightMiddleImage',
        '&:hover': {
            '& ~ #latest-recipe-text-2 .latest-recipe-heading': {
                textDecoration: 'underline',
            },
            img: {
                transform: 'scale(1.2)',
                transition: '1s',
            },
        },
    },
    '#latest-recipe-image-3': {
        gridArea: 'rightBottomImage',
        '&:hover': {
            '& ~ #latest-recipe-text-3 .latest-recipe-heading': {
                textDecoration: 'underline',
            },
            img: {
                transform: 'scale(1.2)',
                transition: '1s',
            },
        },
    },
    '#latest-recipe-text-0': {
        gridArea: 'leftText',
        paddingLeft: calcRem(5),
        '&:hover .latest-recipe-heading': {
            textDecoration: 'underline',
        },
    },
    '#latest-recipe-text-1': {
        gridArea: 'rightTopText',
        '&:hover .latest-recipe-heading': {
            textDecoration: 'underline',
        },
    },
    '#latest-recipe-text-2': {
        gridArea: 'rightMiddleText',
        '&:hover .latest-recipe-heading': {
            textDecoration: 'underline',
        },
    },
    '#latest-recipe-text-3': {
        gridArea: 'rightBottomText',
        '&:hover .latest-recipe-heading': {
            textDecoration: 'underline',
        },
    },

    [breakpoint('sm')]: {
        height: '60vh',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(3, 32%)',
        gridTemplateAreas:
            "'leftImage leftImage rightTopImage rightTopText' 'leftImage leftImage rightMiddleImage rightMiddleText' 'leftText leftText rightBottomImage rightBottomText'",
    },
})

export const StyledLatestRecipeCardsColumn = styled('div')({})

export const StyledLatestRecipeCardHeadings = styled(StyledHeadingFour)({
    fontSize: calcRem(18),
    margin: calcRem(0, 0, 5),

    [breakpoint('md')]: {
        margin: calcRem(0, 0, 10),
    },
})

export const StyledLatestRecipeImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
})

export const StyledLatestRecipeDescription = styled('p')({
    fontWeight: 100,
    margin: calcRem(0),
    fontSize: calcRem(12),

    [breakpoint('md')]: {
        fontSize: calcRem(16),
    },
})

export const StyledLatestRecipeCard = styled(Link)({
    width: '100%',
    textDecoration: 'none',
    color: colours.black,
})

export const StyledLatestRecipeCardText = styled('div')({})
