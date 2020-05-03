import styled from '@emotion/styled'
import { calcRem } from '../../../styling/styling-utils/calcRem'
import { colours } from '../../../styling/colours'
import { StyledHeadingFour } from '../../../common/Headings.styled'
import { Checkbox } from '../../../common/Checkbox/Checkbox'

export const StyledRecipeStepContent = styled('div')({
    '.method-step': {
        p: {
            margin: 0,
            lineHeight: 1.5,
        },
    },
})

export const StyledRecipeStepContentHeading = styled(StyledHeadingFour)({
    margin: calcRem(0, 0, 5),
})

export const StyledRecipeStepCheckbox = styled(Checkbox)({
    marginRight: calcRem(10),
})

export const StyledRecipeStepContainer = styled('div')({
    label: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: `${calcRem(1)} solid ${colours.lightGrey}`,
        padding: calcRem(10, 2),
    },
})
