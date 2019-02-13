import React from 'react'

function Welcome() {
    return (
      <div>
        <style jsx>{`
          .intro {
            text-align: center;
          `}
        </style>
        <div className='intro'>
          <h2>
            Welcome to Avery's Organics! We are a mid-sized farm in Northern Oregon
            that grows organic produce, and sells it at Farmer's Markets
            throughout town. We visit different markets every day and our products are determined by season so check out our site to get the latest info on where we will be and what we're selling!
          </h2>
        </div>
      </div>
    );
}
export default Welcome