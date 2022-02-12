import React from "react";
import { jsx, Themed } from "theme-ui";

const Contact = () => {
  return (
    <section id="contact">
      <h2> Contact </h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
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
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
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
