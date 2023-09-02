import { useForm } from '@formspree/react';
import React from 'react';
import './Contact.css';
function Contact() {
  const [state, handleSubmit] = useForm("mwkdpjal");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <div class="form-container">
        <form class="form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="text" id="email" name="email" required=""></input>
          </div>

          <div class="form-group">
            <label for="textarea">How Can I Help You?</label>
            <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
          </div>

          <button class="form-submit-btn" type="submit" disabled={state.submitting}>Submit</button>
        </form>
      </div>
  );
}
function App() {
  return (
    <Contact />
  );
}

export default App