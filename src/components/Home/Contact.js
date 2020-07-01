import React, {useState} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

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
            errors.name = 'Wymagane';
        } else if (name.length < 2) {
            errors.name = 'Podane imię jest nieprawidłowe!';
        }

        if (!email) {
            errors.email = 'Wymagane';
        } else if (!re.test(String(email).toLowerCase())) {
            errors.email = 'Podany email jest nieprawidłowy';
        }

        if (!message) {
            errors.message = 'Wymagane';
        } else if (message.length < 10) {
            errors.message = 'Wiadomość musi mieć conajmniej 10 znaków!';
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
                    setServerResponse('Wiadomość została wysłana! Wkrótce się skontaktujemy!');
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
                setServerResponse('Coś poszło nie tak :(');
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
                            <h2>Skontaktuj się ze mną</h2>
                        </div>

                        {
                            serverResponse && serverResponse === 'Coś poszło nie tak :('
                                ? <h3 className="message-error">{serverResponse}</h3>
                                : <h3 className="message-sent">{serverResponse}</h3>
                        }

                        <form className="section-contact__form" onSubmit={handleSubmit}>

                            <div className="input-wrapper">
                                <label className="form__label" htmlFor="name">Imię:</label>
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

                            <label className="form__label" htmlFor="message">Wiadomość:</label>
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
                                        disabled={isSending}>{isSending ? "Wysyłam..." : "Wyślij"}</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Contact;