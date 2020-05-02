import styled from '@emotion/styled'
import { breakpoint } from '../styling/styling-utils/breakpoints'
import { calcRem } from '../styling/styling-utils/calcRem'
import { colours } from '../styling/colours'

export const StyledRecipeInfoCard = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexBasis: calcRem(129),
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
        fontSize: calcRem(14),
        '&.recipe-info-heading': {
            fontWeight: 'bold',
        },
    },

    [breakpoint('sm')]: {
        flexBasis: calcRem(85),
        img: {
            display: 'none',
        },
        p: {
            fontSize: calcRem(16),
        },
    },
})

export const StyledRecipeInfoVerticalCard = styled('div')({
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
