import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2> Contact </h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
        >
        <p>
          <label>
            Your Name: <input type="text" name="name" placeholder="Your Name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" placeholder="Yor email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" placeholder="your message"></textarea>
          </label>
        </p>
        <p>
          <button>Send</button>
        </p>
      </form>
    </section>
  );
};

export default Contact;
