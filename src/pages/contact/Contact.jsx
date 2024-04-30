import React from 'react'
import ContactForm from './ContactForm'
import { FormspreeProvider } from '@formspree/react';


const Contact = () => {
  return (
  <div className='contactBox' data-aos="fade-up" data-aos-duration="1500">
    <div className='contactHead'>
      <div className="bg-contact">
        <h1>KONTAKTIERE UNS</h1>
        <p>Unser Kundendienst ist gerne für Sie Mo. - Fr. von 9:00 bis 18:00 Uhr erreichbar. Bei Problemen oder Fragen stehen wir Ihnen gerne zu verfügung. Füllen Sie dafür das Formular aus, wir werden uns dann schnellstmöglich mit Ihnen in verbindung setzen.</p>
      </div>

      <div className='contact'>
    <FormspreeProvider>
      <ContactForm />
    </FormspreeProvider>
      </div>  
    </div>
  </div>
  )
}

export default Contact;