import styled from '@emotion/styled'
import { calcRem } from '../styling/styling-utils/calcRem'
import { colours } from '../styling/colours'

export const StyledForm = styled('form')({
    width: '100%',
})

export const StyledFieldset = styled('fieldset')({
    display: 'block',
    padding: calcRem(9),
    border: `${calcRem(1)} solid ${colours.primary.primary}`,
    marginBottom: calcRem(30),
    borderRadius: calcRem(5),
    // &.empty {
    //     > span {
    //         display: block;
    //     }
    // }
    '&:last-child': {
        border: 'none',
        marginBottom: 0,
        textAlign: 'center',
    },
    ' > label': {
        display: 'block',
        float: 'left',
        marginTop: calcRem(-28),
        background: colours.white,
        height: calcRem(14),
        padding: calcRem(7, 5, 7, 5),
        color: colours.primary.primary,
        fontSize: calcRem(18),
        overflow: 'hidden',
    },
    // .form-element.disabled > label {
    //     color: $secondaryColor;
    // }

    ' > span': {
        backgroundColor: colours.primary.primary,
        display: 'none',
        padding: calcRem(3),
        margin: calcRem(0, -9, -9, -9),
        textAlign: 'center',
        color: colours.white,
        fontSize: calcRem(18),
    },
    // .form-element.disabled > span {
    //     background-color: $secondaryColor;
    // }
})

export const StyledLabel = styled('label')({
    width: calcRem(100),
})

export const StyledInput = styled('input')({})

export const StyledTextarea = styled('textarea')({})
