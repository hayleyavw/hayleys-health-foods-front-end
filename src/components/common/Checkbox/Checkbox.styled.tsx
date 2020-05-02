import styled from '@emotion/styled'
import { calcRem } from '../../styling/styling-utils/calcRem'

interface StyledCheckboxProps {
    checked?: boolean
}

export const StyledHiddenCheckbox = styled('input')<StyledCheckboxProps>(({ checked }) => ({
    display: 'inline-block',
    width: calcRem(16),
    height: calcRem(16),
    background: checked ? 'red' : 'salmon',
    borderRadius: calcRem(3),
    transition: 'all 150ms',
}))

export const StyledCheckboxContainer = styled('div')({
    display: 'inline-block',
    verticalAlign: 'middle',

    '.hidden-checkbox:focus': {
        '.checkbox': {
            boxShadow: '0 0 0 3px pink',
        },
    },
})
