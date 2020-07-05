import React, {useState} from 'react';
import emailjs from 'emailjs-com';


const Contact = ({contact}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [serverResponse, setServerResponse] = useState('');
    const [isSending, setIsSending] = useState(false);

    const validate = (name, email, message) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const errors = {};
        if (!name) {
            errors.name = contact.statuses.required;
        } else if (name.length < 2) {
            errors.name = contact.statuses.errorName;
        }

        if (!email) {
            errors.email = contact.statuses.required;
        } else if (!re.test(String(email).toLowerCase())) {
            errors.email = contact.statuses.errorEmail;
        }

        if (!message) {
            errors.message = contact.statuses.required;
        } else if (message.length < 10) {
            errors.message = contact.statuses.errorMessage;
        }
        if (!errors.name && !errors.email && !errors.message) {
            errors.ok = true;
        }
        return errors;
    }

    const sendMessage = (name, email, message) => {

        let templateParams = {
            from_name: name,
            email: email,
            message_html: message
        }
        setIsSending(true);
        emailjs.send(process.env.REACT_APP_EMAIL_SERVISE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAIL_USER_ID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                if (response.status === 200) {
                    setServerResponse(contact.statuses.sendingOk);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setIsSending(false);
                    setTimeout(() => {
                        setServerResponse('');
                    }, 5000)
                }
            }, (err) => {
                console.log('FAILED...', err);
                setIsSending(false);
                setServerResponse(contact.statuses.sendingFail);
            });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const result = validate(name, email, message);
        result.ok ? sendMessage(name, email, message) : setErrors(result);
    }


    return (
        <>
            <section className="contact">

                <div className="container">

                    <div className="section-contact">

                        <div className="section-contact__title">
                            <h2>{contact.title}</h2>
                        </div>

                        {
                            serverResponse && serverResponse === contact.statuses.sendingFail
                                ? <h3 className="message-error">{serverResponse}</h3>
                                : <h3 className="message-sent">{serverResponse}</h3>
                        }

                        <form className="section-contact__form" onSubmit={handleSubmit}>

                            <div className="input-wrapper">
                                <label className="form__label" htmlFor="name">{contact.name}</label>
                                <input
                                    className={errors.name ? "form__input error__input" : "form__input"}
                                    id="name"
                                    name="name"
                                    type="text"
                                    //  placeholder="Imię"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    onFocus={() => {
                                        setErrors({});
                                    }}
                                />
                                {
                                    errors.name && <h3 className="error__text">{errors.name}</h3>
                                }
                            </div>

                            <div className="input-wrapper">
                                <label className="form__label" htmlFor="email">Email:</label>
                                <input
                                    className={errors.email ? "form__input error__input" : "form__input"}
                                    id="email"
                                    name="email"
                                    type="email"
                                    //  placeholder="abc@xyz.pl"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    onFocus={() => setErrors({})}
                                />
                                {
                                    errors.email && <h3 className="error__text">{errors.email}</h3>
                                }
                            </div>

                            <label className="form__label" htmlFor="message">{contact.message}</label>
                            <textarea
                                rows="4"
                                className={errors.message ? "form__input error__input" : "form__input"}
                                id="message"
                                name="message"
                                // placeholder="Napisz wiadomość dla mnie"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                onFocus={() => setErrors({})}
                            />
                            {
                                errors.message && <h3 className="error__text">{errors.message}</h3>
                            }
                            <div className="submit__wrapper">
                                <button className="form__submit btn" type="submit"
                                        disabled={isSending}>{isSending ? `${contact.btnSending}...` : contact.btnSend}</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Contact;