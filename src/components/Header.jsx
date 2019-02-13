import React from 'react'

function Header() {


    return (
      <div>
        <style jsx>{`
          div {
            border: solid grey;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            background-image: linear-gradient(to right, #f39d9d, #93f4ce);
          }
        `}</style>
        <h1> Avery's Organics </h1>
        <p>The Best of Northern Oregon</p>
      </div>
    );
}

export default Header;