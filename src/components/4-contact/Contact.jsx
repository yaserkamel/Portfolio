import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../public/animation/done.json'
import contactAnimation from '../../../public/animation/contact.json'


const Contact = () => {
  const [state, handleSubmit] = useForm("mbjvbrlb");

  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact Us
      </h1>
      <p className='sub-title'>contact us for more information and get notified when i publish something new.</p>
      <div style={{justifyContent: 'space-between'}} className='flex'>
        <form className=''  onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor='email'>Email Address:</label>
            <input autoComplete='off' required type='email' name='email' id='email'/>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
          />
          </div>
          <div className='flex' style={{marginTop: '30px'}}>
            <label htmlFor='message'>Your message:</label>
            <textarea required name='message'  id='message'></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
          />
          </div>
          <button className='submit' type="submit" disabled={state.submitting} >
            {state.submitting ? 'Submitting' : 'Submit'}
          </button>
          {
            state.succeeded && (
              <p className='flex'>
              <Lottie loop={false}  style={{height: 55, marginLeft: '-15px'}} animationData={doneAnimation} />
              Your messgae has been sent successfully 
              </p>
            )
          }
        </form>
        <div className='animation'>
          <Lottie
            className='contact-animation' 
            style={{height: 355}}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
