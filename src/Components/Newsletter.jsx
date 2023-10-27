import React from 'react';
import "../CSS/Newsletter.css"

function Newsletter() {
  return (
    <form id="email-registration" action="/" method="post">
      <div className="Container">
        <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
        <input type="email" name="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </form>
  );
}

export default Newsletter;
