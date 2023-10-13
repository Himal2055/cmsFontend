import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/footer'
import Button from '../../components/Button/Button'

const Contact = () => {
  return (
    <div>
      <Navbar /> 


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
            <Button title = "Submit"/>
             
            </form>
    </div>

    <Footer />


  </div>
  )
}

export default Contact
