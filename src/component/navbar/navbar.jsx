import React from 'react'
import './navbar.css'
function navbar() {
  return (
    <div className='all'>
      <div>
        <div className='one'>
            <h1>SHORTLY</h1>
        </div>
        <div className='two'>
            <ul>
                <li>Features</li>
                <li>pricing</li>
                <li>Resources</li>
            </ul>
        </div>
      </div>
      <div className='three'>
        <h3>login</h3>
        <button>sign up</button>
      </div>
    </div>
  )
}

export default navbar
