import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/footer'
import Button from '../../components/Button/Button'
const About = () => {
  return (
    <div>
        <Navbar />
        <Button title = "Register" />

    <section className="about">
        <h2>About Us</h2>
        <p>Welcome to Your Digital Pathshala, where learning knows no boundaries. We are a dedicated team of educators and professionals who are passionate about providing quality education online.</p>
        <p>Our mission is to empower individuals with knowledge, skills, and opportunities for personal and professional growth. With a wide range of courses and experienced instructors, we aim to make learning accessible to everyone, anywhere.</p>
        <p>Join us on this journey of discovery and education. Together, we can unlock your potential and help you achieve your goals.</p>
    </section>

    <Footer />



    </div>
  )
}

export default About
