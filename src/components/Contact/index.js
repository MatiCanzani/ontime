import React, { useState } from "react";
import { navigate } from "gatsby";

const [state, setState] = useState({});

const handleChange = (e) => {
  setState({ ...state, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": form.getAttribute("name"),
      ...state,
    }),
  })
    .then(() => navigate(form.getAttribute("action")))
    .catch((error) => alert(error));
};

const Contact = () => {
  return (
    <section id="contact">
      <h2> Contact </h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success/"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name:{" "}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              type="email"
              name="email"
              placeholder="Yor email"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              name="message"
              placeholder="your message"
              onChange={handleChange}
            ></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </section>
  );
};

export default Contact;
