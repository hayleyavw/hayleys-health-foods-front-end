import React, { FormEvent, ChangeEvent } from 'react'

interface State {
    name: string
    email: string
    message: string
}

class ContactForm extends React.Component {
    public readonly state: Readonly<State> = {
        name: '',
        email: '',
        message: '',
    }

    handleChange(event: ChangeEvent) {
        console.log(event.target.id)
        const inputField = event.target.id
        console.log((event.target as any).value)
        switch (inputField) {
            case 'name-input':
                this.setState({ name: (event.target as any).value })
                break
            case 'email-input':
                this.setState({ email: (event.target as any).value })
                break
            case 'message-input':
                this.setState({ message: (event.target as any).value })
                break
        }
    }

    handleSubmit(event: FormEvent) {
        event.preventDefault()

        let formData = {
            formSender: this.state.name,
            formEmail: this.state.email,
            formMessage: this.state.message,
        }

        if (
            formData.formSender.length < 1 ||
            formData.formEmail.length < 1 ||
            formData.formMessage.length < 1
        ) {
            return false
        }

        // email function
        let xhr = new XMLHttpRequest()
        xhr.open('POST', '/https://formspree.io/xpzjpbap', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // everything is fine - show validation message
                console.log('all is well')
            } else if (xhr.readyState === 4 && xhr.status === 400) {
                // invalid email - show error
                console.error(xhr.status, 'Invalid email address.')
            } else if (xhr.readyState === 4) {
                console.error(xhr.status, 'Contact message sending failed.')
            }
        }
        xhr.send(JSON.stringify(formData))

        this.setState({
            name: '',
            email: '',
            message: '',
        })
    }

    render() {
        return (
            <form action="https://formspree.io/xpzjpbap" method="POST">
                <h1>Say Hi!</h1>

                <fieldset>
                    <label htmlFor="formName">Name</label>
                    <input
                        name="name"
                        id="name-input"
                        type="text"
                        required
                        onChange={e => this.handleChange(e)}
                        value={this.state.name}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="formEmail">Email</label>
                    <input
                        name="email"
                        id="email-input"
                        type="email"
                        required
                        onChange={e => this.handleChange(e)}
                        value={this.state.email}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="formMessage">Message</label>
                    <textarea
                        name="message"
                        id="message-input"
                        required
                        onChange={e => this.handleChange(e)}
                    ></textarea>
                </fieldset>

                <div>
                    <input type="submit" placeholder="Send message" />
                </div>
            </form>
        )
    }
}

export default ContactForm
