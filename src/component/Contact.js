import React, { useState, useRef, useEffect } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';
function Contact(props) {
  const form = useRef();
  const [data, setData] = useState({
    name: '',
    email: '',
    subject:'',
    mobile:null,
    country:'',
    message: ''
  })
  const [spin, setSpin] = useState(false)
  const [modalPopup, setModalPopUp] = useState(false)
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    if (modalPopup) {
      setTimeout(() => {
        setModalPopUp(false)

      }, 5000)
    }
  }, [modalPopup])
  const handleSubmit = (e) => {
    e.preventDefault();
    setSpin(true)
    emailjs.sendForm('service_ox6typ8', 'template_smjxe1l', form.current, 'X6nr1YgwUELohsdxW')
      .then((result) => {
        setSpin(false)
        setModalPopUp(true)
        setData({
          name: '',
          email: '',
          subject:'',
          mobile:'',
          country:'',
          message: ''
        })
      }, (error) => {
        setSpin(false)
        console.log(error.text);
      });

  }
  const handleClose = () => {
    setModalPopUp(false);
    setData({
      name: '',
      email: '',
      subject:'',
      mobile:'',
      country:'',
      message: ''
    })
  }
  // console.log(data)
  return (
    <div className='contact-main'>

      <div class="contact-page">
        <h2>Get in touch</h2>

        <div class="contact-info">
          <div class="item">
            <i class="icon-contact fa fa-home"></i>
            <span> New Delhi, India</span>
          </div>
          <div class="item">
            <i class="icon-contact fa fa-phone"></i>
            <span>+91 9487349812</span>
          </div>
          <div class="item">
            <i class="icon-contact fa fa-envelope"></i>
            <span> email@ibchem.com</span>
          </div>
          <div class="item">
            <i class="icon-contact fa fa-info"></i>
            <span> Mon - Fri 8:00 AM to 6:00 PM</span>
          </div>
        </div>

        <div className='contact-form'>
          {modalPopup ? <div>
            <div class="alert alert-success alert-dismissible">
              <button type="button" className="close" data-dismiss="alert" onClick={handleClose}>&times;</button>
              <strong>Message send Successfully!</strong>
            </div>
          </div> : ""
          }
          <form  ref={form} onSubmit={(e) => handleSubmit(e)}>

            <input type="text" className="textb" name='name' value={data.name} onChange={e => handleChange(e)} placeholder="Your Name" required />
            <input type="email" className="textb" name='email' onChange={e => handleChange(e)} placeholder="Your Email" value={data.email} required />
            <input type="text" className="textb" name='subject' onChange={e => handleChange(e)} placeholder="Subject Name" value={data.subject} required />
            <input type="number" className="textb" name='mobile' onChange={e => handleChange(e)} placeholder="Mobile No" value={data.mobile} required />
            <input type="text" className="textb" name='country' onChange={e => handleChange(e)} placeholder="Country Name" value={data.country} required />
            <textarea placeholder="Your Message" name='message' onChange={e => handleChange(e)} value={data.message} required></textarea>
            {spin ? <button class="btns btn btn-dark">
              <span class="spinner-border spinner-border-sm"></span>
              Sending..
            </button> : <input type="submit" className="btns" value='Send' />
            }
          </form>
        </div>
      </div>




    </div>
  );
}

export default Contact;