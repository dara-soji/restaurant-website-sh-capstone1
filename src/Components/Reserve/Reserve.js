import React from 'react'
import './Reserve.scss'

const Reserve = () => {
  return (
    <div className="reserve">
        <div className="reserve__content">
            <h4 className="reserve__content-bold bold-text">Reserve</h4>
            <h3 className="reserve__content-title head-text">Skip The Line</h3>
            <p className="reserve__content-desc p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto porro magnam amet distinctio vitae debitis soluta fugit sunt cumque accusantium.</p>
            <a href="https://www.opentable.com">
                <button className="reserve__buttons-reserve">Reserve Table</button>
            </a>
            <p className="reserve__content-comment p-text">You will be redirected to opentable.com to reserve your table</p>
        </div>
    </div>
  )
}

export default Reserve