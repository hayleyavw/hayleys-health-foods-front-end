import React from 'react'
import {
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledTextarea,
    StyledFieldset,
} from './ContactForm.styled'

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

                <StyledFieldset>
                    <StyledLabel htmlFor="formMessage">Message</StyledLabel>
                    <StyledTextarea name="message" id="message-input" required></StyledTextarea>
                </StyledFieldset>

                <div>
                    <input type="submit" placeholder="Send message" />
                </div>
            </StyledForm>
        )
    }
}

export default ContactForm
