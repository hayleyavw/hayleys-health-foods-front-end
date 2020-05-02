import styled from '@emotion/styled'
import { calcRem } from '../../styling/styling-utils/calcRem'
import { colours } from '../../styling/colours'

interface StyledCheckboxProps {
    checked?: boolean
}

export const StyledHiddenCheckbox = styled('input')<StyledCheckboxProps>(({ checked }) => ({
    border: 0,
    clip: 'rect(0 0 0 0)',
    clippath: 'inset(50%)',
    height: calcRem(1),
    width: calcRem(1),
    margin: calcRem(-1),
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
}))

export const StyledCheckbox = styled('div')<StyledCheckboxProps>(({ checked }) => ({
    display: 'inline-block',
    width: calcRem(16),
    height: calcRem(16),
    border: `${calcRem(2)} ${checked ? colours.grey : colours.primary.primary} solid`,
    backgroundColor: checked ? colours.grey : undefined,
    borderRadius: calcRem(3),
    transition: 'all 150ms',

    '.checkmark-icon': {
        visibility: checked ? 'visible' : 'hidden',
    },
}))

export const CheckmarkIcon = styled('svg')({
    fill: 'none',
    stroke: 'white',
    strokeWidth: calcRem(2),
})

export const StyledCheckboxContainer = styled('div')({
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: calcRem(3),

    '.hidden-checkbox:focus': {
        '.checkbox': {
            boxShadow: '0 0 0 3px pink',
        },
    },
})
