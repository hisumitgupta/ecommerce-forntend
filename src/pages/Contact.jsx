import React from 'react'
import Navbar from '../components/Navbar.jsx'
import '../css/ContactUs.css'
import { useForm } from "react-hook-form"
const Contact = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (data) => {
    // console.log(data)
    // send contact Data to backend 
    // code HERE
  }


  return (
    <div>
      <Navbar />
      {/* <h1>Contact</h1> */}
      <section className="contact-section">
        <div className="container-contact">
          <h1>Contact Us</h1>
          <p>If you have any questions, feel free to reach out to us by filling out the form below or through our customer support. We’re here to help!</p>

          <div className="contact-info">
            <div className="info-box">
              <h3>Email Us</h3>
              <p>support@shopease.com</p>
            </div>
            <div className="info-box">
              <h3>Call Us</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="info-box">
              <h3>Visit Us</h3>
              <p>1234 Market Street, Suite 100, San Francisco, CA</p>
            </div>
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" {...register('fullName', { required: { value: true, message: "this field required" }, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 10, message: "max length is 10" } })}></input>
                {errors.fullName && <div className='red'>{errors.fullName.message}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" {...register('email', { required: { value: true, message: "this field is required" } })}></input>
                {errors.email && <div className='red'>{errors.email.message}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" {...register("contactMsg", { required: { value: true, message: "Enter the Message" } })}></textarea>
                {errors.contactMsg && <div className='red'>{errors.contactMsg.message}</div>}
              </div>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact