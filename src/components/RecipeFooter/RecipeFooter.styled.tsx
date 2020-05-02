import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calcRem'

export const StyledRecipeFooter = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
})

export const StyledRecipeFooterButtons = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',

    a: {
        margin: calcRem(5),
    },
})
