import { useState } from 'react';
import axios from 'axios';
import Spinner from 'components/Loader';

const ContactSection = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    error: false,
    success: false
  });

  const { name, email, message, error, success } = values;

  const sendEmail = event => {
    event.preventDefault();

    if (name && email && message) {
      axios
        .post('/api/server', { ...values })
        .then(response => {
          setValues(
            {
              name: '',
              email: '',
              message: '',
              error: false,
              success: true
            },
            setTimeout(() => {
              setValues({
                name: '',
                email: '',
                message: '',
                success: false
              });
            }, 3000)
          );
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setValues({
        ...values,
        error: true
      });
    }
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  return (
    <div className="contact-feature" id="contact">
      <h2 className="positioning">Get in touch</h2>
      <section className="contact-form">
        <form className="contact-form__form" onSubmit={sendEmail}>
          <input
            type="text"
            className="contact-form__input"
            name="name"
            placeholder="Name"
            value={name}
            onChange={onInputChange}
          />
          <label htmlFor="name" className="contact-form__label">
            Name
          </label>
          <input
            type="email"
            className="contact-form__input"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={onInputChange}
            required
          />
          <label htmlFor="email" className="contact-form__label">
            Email address
          </label>
          <textarea
            className="contact-form__input"
            name="message"
            placeholder="Message"
            value={message}
            onChange={onInputChange}
          ></textarea>
          <label htmlFor="message" className="contact-form__label">
            Message
          </label>
          <div>
            <button
              type="submit"
              className="btn btn--green"
              title="Send message"
            >
              Send Message
            </button>
          </div>
          {success ? (
            <div className="contact-form__alert contact-form__alert--success">
              <Spinner /> Sending Message
            </div>
          ) : error ? (
            <div className="contact-form__alert contact-form__alert--error">
              Please fill in all fields
            </div>
          ) : (
            ''
          )}
        </form>
      </section>
    </div>
  );
};

export default ContactSection;
