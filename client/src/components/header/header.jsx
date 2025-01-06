import React from 'react'
import logo from '../../assets/Logo/Tafach_logo_transparent.png'

const header = () => {
  return (
    <div className='header'>
      <div className="top-header">
        <div className="top-left-header">
            <div className="logo-container">
                <img src={logo} alt="Logo" />
                <h1>Tafach Ambassador</h1>
            </div>
        </div>

        <div className="top-middle-header">

        </div>

        <div className="top-left-header">

        </div>
      </div>

      <div className="bottom-header">

      </div>
    </div>
  )
}

export default header
