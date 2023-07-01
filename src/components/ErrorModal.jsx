import React from 'react'
import './ErrorModal.css'

export default function ErrorModal(props) {

  return (
    <div className='backdrop'>
      <div className='modal'>
        <div className='header'>
          <h2>Error Message</h2>
        </div>
        <div className='content'>
          <p>Error occured</p>
        </div>
        <div className='actions'>X</div>
      </div>

    </div>
  )
}
