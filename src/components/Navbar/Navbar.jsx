import React from 'react'

const Navbar = () => {
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
    </div>
  )
}

export default Navbar

