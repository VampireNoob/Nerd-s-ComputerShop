import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'


const ContactForm =()=> {
  const [state, handleSubmit] = useForm("xqknozoj");
  if (state.succeeded) {
      return <div className="thank-you"><h4>Danke für Ihren Support!</h4></div>;
  }
  return (
  <form className="form" onSubmit={handleSubmit}>
    <label className='name'>
    </label>
      <input
        id="firstName"
        type="text" 
        name="firstName"
        placeholder='Vorname'
      />
      <input
        id="secondName"
        type="text" 
        name="secondName"
        placeholder='Name'
      />

    <label htmlFor="email">
    </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email...'
      />

    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
    <label htmlFor="email">
      <textarea
        id="message"
        name="message"
        placeholder='Dein text...'
      />
    </label>

    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />

    <button className="btn-submit" type="submit" disabled={state.submitting}>
      Senden
    </button>
  </form>
  );
}
export default ContactForm;
