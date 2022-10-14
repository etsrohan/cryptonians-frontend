import styles from "../styles/Contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jsd3qqe",
        "template_2z5nqr4",
        form.current,
        "r_Xc76f5YZlH3ozT3"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div id="contact" className={styles.container}>
      <div data-aos="fade-up">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="NAME" />
          <br />
          <input type="email" name="user_email" placeholder="EMAIL" />
          <br />
          <input className={styles.button} type="submit" value="SEND" />
        </form>
        <h1>OR CONTACT US AT:</h1>
        <h2>neptune-email@email.com</h2>
      </div>
    </div>
  );
}

export default Contact;
