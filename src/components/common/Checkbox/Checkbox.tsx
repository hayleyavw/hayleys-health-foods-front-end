import React, { ChangeEvent } from 'react'
import { StyledCheckboxContainer, StyledHiddenCheckbox } from './Checkbox.styled'

interface CheckboxProps {
    className?: string
    checked?: boolean
    handler: (evt?: Event | ChangeEvent | undefined) => void
}

export const Checkbox = (props: CheckboxProps) => (
    <StyledCheckboxContainer className={props.className}>
        <StyledHiddenCheckbox
            checked={props.checked}
            onChange={event => {
                props.handler(event)
            }}
            className="checkbox"
            type="checkbox"
        />
    </StyledCheckboxContainer>
)
