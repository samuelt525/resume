import React, { useState, useRef } from "react";
import { Element } from "react-scroll";
import Section from "../layouts/Section";
import emailjs from '@emailjs/browser'

export default function Contact() {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rgtp8mz', 'template_jtxk7hb', form.current, {
      publicKey: '8pCNnx3CNLI77KO1f'
    })
    .then(
      () => {
        console.log('Success!')
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };

  return (
    <Section name="contact" noPadding={true}>
      <h2> Contact Me! </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" required/>
        </div>
        <div>
          <input type='submit' value='Send'/>
        </div>
      </form>
    </Section>
  );
}
