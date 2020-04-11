import styled from '@emotion/styled'
import { StyledButton, StyledButtonText } from '../common/Button.styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { breakpoint } from '../styling/styling-utils/breakpoints'
import { gradients } from '../styling/gradients'

interface StyledFilterButtonProps {
    selected: boolean
}

export const StyledFilterButton = styled(StyledButton)<StyledFilterButtonProps>(({ selected }) => ({
    margin: calcRem(2),
    padding: calcRem(3),

    [breakpoint('sm')]: {
        padding: calcRem(5, 6),
    },

    boxShadow: selected ? '2px 1000px 1px #fff inset' : '',
    'p:first-of-type': {
        background: selected ? `${gradients.primary_to_accent}` : '',
        WebkitBackgroundClip: selected ? 'text' : '',
        color: selected ? 'transparent' : '',
    },

    '&:hover': {
        cursor: 'pointer',
    },
}))

export const StyledFilterButtonText = styled(StyledButtonText)({})
