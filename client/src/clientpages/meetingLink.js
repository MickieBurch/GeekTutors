import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import Layout from '../components/layout'

import { Container, Form } from 'react-bootstrap'
// import { useForm } from "react-hook-form";

export const MeetingLink = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_awoerg5', 'template_zjzlzja', form.current, 'YR18whxD3H2toOE-U')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <Container>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Label>Name</Form.Label>
        <input type="text" name="name" />
        <Form.Label>Email</Form.Label>
        <input type="email" name="email" />
        <Form.Label>Message</Form.Label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </Form>
      </Container>
    );
  };