import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:4000/api/v1/message/send", {
        name, email, subject, message
      }, {
        withCredentials: true, headers: {"Content-Type": "application/json"}
      }
    ).then(res => {
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }).catch((error) => {
      toast.error(error.response.data.message);
    });
  };
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
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.name)}/>
                <input type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.email)}/>
              </div>
              <input type='text' placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.subject)}/>
              <textarea rows={10} placeholder='message' value={message} onChange={(e) => setMessage(e.target.message)}/>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact