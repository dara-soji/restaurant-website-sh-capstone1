import React from 'react'
import './Reserve.scss'

const Reserve = () => {
  return (
    <div className="reserve">
        <div className="reserve__content">
            <h4 className="reserve__content-bold bold-text">Reserve</h4>
            <h3 className="reserve__content-title head-text">To reserve a table with us:</h3>
            <p className="reserve__content-desc p-text"> If you want to reserve a table with us via phone or email, please contact 0810005764 or send an email to reserve@thegroup83.ac.za.
             For Inqueries Please email inq@thegroup83.co.za. Reservations shoulb be made atleast 5 hours prior. No Cancellation is allowed 2 hours before the reserved hour booked or a fee of R120.00 will be charged.</p>
            <a href="https://www.opentable.com">
                <button className="reserve__buttons-reserve">Reserve Table</button>
            </a>
            <p className="reserve__content-comment p-text">You will be redirected to opentable.com to reserve your table</p>
        </div>
    </div>
  )
}

export default Reserve
