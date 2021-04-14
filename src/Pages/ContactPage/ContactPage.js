import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contactMe-pg" id='contact'>
      <div className='contact-content'>
        <h1 className="contact-header"> Get in touch. </h1>
        <div className="contact-form">
          <Form className='cform'>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Your Name"
                className="contact-form-input"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                size="lg"
                type="email"
                placeholder="Your Email"
                className="contact-form-input"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={3}
                size="lg"
                placeholder="Message"
                className="contact-form-input"
                required
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="btn-contact-send">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
