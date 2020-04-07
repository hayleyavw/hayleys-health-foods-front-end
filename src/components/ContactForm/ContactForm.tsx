import React from 'react'
import {
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledTextarea,
    StyledFieldset,
    StyledButtonWrapper,
} from './ContactForm.styled'
import { StyledButton, StyledButtonText } from '../common/Button.styled'

class ContactForm extends React.Component {
    render() {
        return (
            <StyledForm action="https://formspree.io/xpzjpbap" method="POST">
                <StyledFieldset>
                    <StyledLabel htmlFor="formName">Name</StyledLabel>
                    <StyledInput name="name" id="name-input" type="text" required />
                </StyledFieldset>

                <StyledFieldset>
                    <StyledLabel htmlFor="formEmail">Email</StyledLabel>
                    <StyledInput name="email" id="email-input" type="email" required />
                </StyledFieldset>

                <StyledFieldset className="contact-textarea">
                    <StyledLabel htmlFor="formMessage">Message</StyledLabel>
                    <StyledTextarea
                        name="message"
                        id="message-input"
                        required
                        rows={5}
                    ></StyledTextarea>
                </StyledFieldset>

                <StyledButtonWrapper>
                    <StyledButton type="submit">
                        <StyledButtonText>Send Message</StyledButtonText>
                    </StyledButton>
                </StyledButtonWrapper>
            </StyledForm>
        )
    }
}

export default ContactForm
