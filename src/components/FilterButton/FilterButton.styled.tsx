import styled from '@emotion/styled'
import { StyledButton, StyledButtonText } from '../common/Button.styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { breakpoint } from '../styling/styling-utils/breakpoints'

export const StyledFilterButton = styled(StyledButton)({
    margin: calcRem(2),
    padding: calcRem(3),

    [breakpoint('sm')]: {
        padding: calcRem(5, 6),
    },
})

export const StyledFilterButtonText = styled(StyledButtonText)({})
