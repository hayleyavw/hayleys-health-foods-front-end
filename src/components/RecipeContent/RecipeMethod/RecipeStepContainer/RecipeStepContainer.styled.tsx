import styled from '@emotion/styled'
import { calcRem } from '../../../styling/styling-utils/calcRem'
import { colours } from '../../../styling/colours'
import { StyledHeadingFour } from '../../../common/Headings.styled'
import { Checkbox } from '../../../common/Checkbox/Checkbox'

interface StyledRecipeStepProps {
    checked?: boolean
}

export const StyledRecipeStepContent = styled('div')({
    '.method-step': {
        p: {
            margin: 0,
            lineHeight: 1.5,
        },
    },
})

export const StyledRecipeStepContentHeading = styled(StyledHeadingFour)<StyledRecipeStepProps>(
    ({ checked }) => ({
        margin: calcRem(0, 0, 5),
        color: checked ? colours.grey : undefined,
    })
)

export const StyledRecipeStepCheckbox = styled(Checkbox)({
    marginRight: calcRem(10),
})

export const StyledRecipeStepContainer = styled('div')<StyledRecipeStepProps>(({ checked }) => ({
    label: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: `${calcRem(1)} solid ${colours.lightGrey}`,
        padding: calcRem(10, 2),
        '&.step-0': {
            paddingTop: 0,
        },
        span: {
            textDecoration: checked ? 'line-through' : undefined,
            color: checked ? colours.grey : undefined,
            transition: '0.3s',
        },
    },
}))
