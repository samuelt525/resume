import React, { useState, useRef } from "react";
import { Element } from "react-scroll";
import Section from "../layouts/Section";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_rgtp8mz", "template_jtxk7hb", form.current, {
        publicKey: "8pCNnx3CNLI77KO1f",
      })
      .then(
        () => {
          console.log("Success!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Section name="contact" className="bg-gray-900 text-gray-200" >
      <h1 className='text-xl font-bold uppercase text-white text-start'>Get in Touch</h1>
      <div className="grid grid-cols-2 gap-x-16">
        <div className="flex flex-col cols-span-1 text-left">
          <span>
            Have a project for me? Any questions about something I've built? I'd
            love to hear from you, give me a shout by email or by using the form
            below if you'd like to get in contact with me
          </span>
        </div>
        <div className="col-span-1 w-full">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name" className="sr-only">
              Name:
            </label>
            <div className="relative mt-1 rounded-md">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="block w-full rounded-md bg-gray-800 px-4 py-2 text-white focus:outline-none  "
              />
            </div>
            <div className="relative mt-1 rounded-md">
              <label htmlFor="email" className="sr-only">
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="block w-full rounded-md bg-gray-800 px-4 py-2 text-white focus:outline-none"
              />
            </div>
            <div className="relative mt-1 rounded-md">
              <label htmlFor="message" className="sr-only">
                Message:
              </label>
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={6}
                className="block w-full rounded-md border-none bg-gray-800 px-3 py-2 text-white shadow-xl shadow-black/30 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500"
              />
            </div>
            <div className="flex justify-start my-4 ">
              <input type="submit" value="Send Email" 
              className="px-4 py-2 font-semiboldtextsm rounded-md shadow-sm text-white
              transition ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300"/>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
