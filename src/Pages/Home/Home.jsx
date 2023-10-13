import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/footer'
import Button from '../../components/Button/Button'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Button title  ="Register" color="red" subTitle ="This is subtitle"/>
        <Button title ="Login" color="green" subTitle ="This is subtitle"/>

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

    <Footer />

    
    </div>
  )
}

export default Home
