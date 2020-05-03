import styled from '@emotion/styled'
import { StyledRecipeStepCard } from '../StaticRecipeStepCard.styled'
import { calcRem } from '../../styling/styling-utils/calcRem'
import { breakpoint } from '../../styling/styling-utils/breakpoints'
import { headingFont } from '../../styling/fonts'
import { colours } from '../../styling/colours'

export const StyledStaticRecipeMethod = styled(StyledRecipeStepCard)({
    flexBasis: '100%',

    ol: {
        paddingInlineStart: 0,
        listStyle: 'none',
        counterReset: 'first-indent',

        li: {
            counterIncrement: 'first-indent',
            display: 'flex',

            '&:before': {
                content: 'counter(first-indent)',
                marginRight: calcRem(16),
                fontSize: calcRem(32),
                fontFamily: headingFont,
                color: colours.primary.primary,
                lineHeight: calcRem(25),
            },

            p: {
                margin: calcRem(0, 0, 10),
                lineHeight: calcRem(25),
            },
        },
    },

    [breakpoint('sm')]: {
        flexBasis: '66%',
    },
})
