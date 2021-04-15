import React from "react";
import emailjs from 'emailjs-com';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ContactPage.css";



export default function ContactPage() {

  function sendEmail(e) {
   e.preventDefault()
    emailjs.sendForm('service_hogjkbb', 'template_e2sl99v', '.cont-form', 'user_rUqwiXnZGZKoaJsyvHVye')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }


  return (
    <div className="contactMe-pg" id='contact'>
      <div className='contact-content'>
        <h1 className="contact-header"> Get in touch. </h1>
        <div className="contact-form">
          <Form  className="cont-form"  onSubmit={sendEmail}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Your Name"
                name='user_name'
                className="contact-form-input"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                size="lg"
                type="email"
                name='user_email'
                placeholder="Your Email"
                className="contact-form-input"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                name='message'
                rows={3}
                size="lg"
                placeholder="Message"
                className="contact-form-input"
                required
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="btn-contact-send" >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
