import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button, Modal } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactPage.css";

export default function ContactPage() {
  const [smShow, setSmShow] = useState(false);
  const [message, setMessage] = useState({ title: "", body: "" });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hogjkbb",
        "template_e2sl99v",
        ".cont-form",
        "user_rUqwiXnZGZKoaJsyvHVye"
      )
      .then(
        (result) => {
          setMessage({title: <div>Thank you! <i class="fas fa-heart"></i> </div>, body:'Your message has been sent successfully!'})
          setSmShow(true);
        },
        (error) => {
          setMessage({title: <div> Oups! <i class="fas fa-frown"></i></div>, body:'Something went wrong. Please try again!'})
          setSmShow(true);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contactMe-pg" id="contact">
      <div className="contact-content" data-aos="zoom-in">
        <h1 className="contact-header"> Get in touch. </h1>
        <div className="contact-form">
          <Form className="cont-form" onSubmit={sendEmail}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Your Name"
                name="user_name"
                className="contact-form-input"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                size="lg"
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="contact-form-input"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                name="message"
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
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className='modal-email'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {message.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{message.body}</Modal.Body>
      </Modal>
    </div>
  );
}
