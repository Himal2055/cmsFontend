import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
    <header>
        <nav>
            <div className="logo">
                <h1>Your Digital Pathshala</h1>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>


    <div className="container">
        <h1>Contact Digital Pathsala</h1>
        <form action="your_server_script.php" method="post">
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>

    <footer>
        &copy; 2023 Digital Pathsala. All rights reserved.
    </footer>
  </div>
  )
}

export default Contact
