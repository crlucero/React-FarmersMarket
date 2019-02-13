import React from 'react'
import { Link } from 'react-router-dom'

function Header() {


    return (
      <div>
        <style jsx>{`
          .container {
            border: solid grey;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            background-image: linear-gradient(to right, #f39d9d, #93f4ce);
          }
          .links {
            display: grid;
            grid-template-columns: 1fr 0fr 1fr;
            padding-bottom: .75%;
          }
        `}</style>
        <div className='container'>
          <h1> Avery's Organics </h1>
          <p>The Best of Northern Oregon</p>
          <div className='links'>
            <Link to='/' style={{ textDecoration: 'none' }}>
              Home
            </Link>
             <Link to='/schedule' style={{ textDecoration: 'none' }} >Schedule</Link> 
            <Link to='seasonal' style={{ textDecoration: 'none' }} >Seasonal Produce</Link>
          </div>
        </div>
      </div>
    );
}

export default Header;