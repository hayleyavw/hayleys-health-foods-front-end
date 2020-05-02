import React, { ChangeEvent } from 'react'
import {
    StyledCheckboxContainer,
    StyledHiddenCheckbox,
    StyledCheckbox,
    CheckmarkIcon,
} from './Checkbox.styled'

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
        <StyledCheckbox checked={props.checked}>
            <CheckmarkIcon className="checkmark-icon" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </CheckmarkIcon>
        </StyledCheckbox>
    </StyledCheckboxContainer>
)
