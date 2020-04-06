import React from 'react'

class ContactForm extends React.Component {
    render() {
        return (
            <form action="https://formspree.io/xpzjpbap" method="POST">
                <fieldset>
                    <label htmlFor="formName">Name</label>
                    <input name="name" id="name-input" type="text" required />
                </fieldset>

                <fieldset>
                    <label htmlFor="formEmail">Email</label>
                    <input name="email" id="email-input" type="email" required />
                </fieldset>

                <fieldset>
                    <label htmlFor="formMessage">Message</label>
                    <textarea name="message" id="message-input" required></textarea>
                </fieldset>

                <div>
                    <input type="submit" placeholder="Send message" />
                </div>
            </form>
        )
    }
}

export default ContactForm
