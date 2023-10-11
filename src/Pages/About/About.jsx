import React from 'react'
import './About.css'
const About = () => {
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

    <section className="about">
        <h2>About Us</h2>
        <p>Welcome to Your Digital Pathshala, where learning knows no boundaries. We are a dedicated team of educators and professionals who are passionate about providing quality education online.</p>
        <p>Our mission is to empower individuals with knowledge, skills, and opportunities for personal and professional growth. With a wide range of courses and experienced instructors, we aim to make learning accessible to everyone, anywhere.</p>
        <p>Join us on this journey of discovery and education. Together, we can unlock your potential and help you achieve your goals.</p>
    </section>

    <footer>
        <div className="footer-content">
            <p>&copy; 2023 Your Digital Pathshala</p>
            <ul className="social-links">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </div>
    </footer>
    </div>
  )
}

export default About
