import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='contact container'>
        <div className='banner'>
          <div className="item">
            <h4>Address</h4>
            <p>Anywhere, 34674</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +347r4684675</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>rm@gmail.com</p>
          </div>
        </div>
        <div className='banner'>
          <div className="item">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29206.49586209974!2d90.4104344!3d23.7897087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1713507274696!5m2!1sen!2sbd"  style={{width:"600%", height:"450px", border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact