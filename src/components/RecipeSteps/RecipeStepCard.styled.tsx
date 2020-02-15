import styled from '@emotion/styled'
import { colours } from '../styling/colours'
import { calcRem } from '../styling/styling-utils/calc-rem'

export const StyledRecipeStepCard = styled('div')({
    backgroundColor: colours.white,
    borderWidth: '3px',
    borderStyle: 'solid',
    padding: '10px',
    height: '100%',

    h4: {
        marginTop: calcRem(10),
    },
    // borderImage: `${gradients.primary_to_accent} 1`,
})
