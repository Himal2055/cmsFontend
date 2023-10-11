import React from 'react'
import './Home.css'
const Home = () => {
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

    <section className="hero">
        <h2>Welcome to Your Digital Pathshala</h2>
        <p>Learn, Grow, and Succeed</p>
        <a href="#" className="cta-button">Get Started</a>
    </section>

    <section className="courses">
        <h2>Popular Courses</h2>
        <div className="course-card">
            <h3>Course Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="course-button">Learn More</a>
        </div>
        <div className="course-card">
            <h3>Course Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="course-button">Learn More</a>
        </div>
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

export default Home
