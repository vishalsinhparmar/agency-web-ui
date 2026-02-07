import { useRef } from 'react'
import {Envelope, Facebook, GeoAlt, Instagram, Linkedin, Telephone, Twitter } from 'react-bootstrap-icons'

import swal from 'sweetalert';
import emailjs from '@emailjs/browser'
export default function ContactUs() {

  const Name = useRef("");
  const Email = useRef("");
  const Message = useRef("");

  const ServiceID = "service_swte3y8";
  const TemlateID = "template_pl3564j";
  const PublicID="ziVVxwAnkD2noY914";
  const FOrmHandeling = (e)=>{
   e.preventDefault();
  const name ={
    MyName:Name.current.value,
    MyEmail:Email.current.value,
    Message:Message.current.value
   


  }
 emailjs.sendForm(ServiceID,TemlateID,e.target,PublicID);
  fetch(`http://localhost:3000/Contact-Us`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(name),
  }).then(() => {
    swal("Good job!", "You clicked the button!", "success");
    e.target.reset();
  }).catch(() => {
    swal("Something went wrong", "Please try again in a moment.", "error");
  });
 

  }
  return (
    <>

    <div className=' row container-fluid '>
           <div className='col-md-6 pt-5 d-flex justify-content-center'>
            <div className=' '>           
            <h1 className='fs-1 fw-bold mx-5 pt-5'>Get in touch </h1>
           <p className=' mx-5 '><span className='p-4 fs-5'><GeoAlt/></span>Company Location</p>
           <p className='mx-5 '><span className='p-4 fs-5'><Telephone/></span>+1(555)234-5678</p>
           <p className='mx-5'><span className='p-4 fs-5'><Envelope/></span>abc@example.com</p>
           <p className='mx-5'>Follow Us </p>
           <div className='d-flex mx-5  '>
           <p className='p-3 bg-light rounded-pill mx-2 shadow'><span className=' fs-4 d-flex  justify-content-center mx-auto'><Twitter/></span></p>
           <p className='p-3 bg-light rounded-pill mx-2 shadow'><span className=' fs-4 d-flex  justify-content-center '><Linkedin/></span></p>
           <p className='p-3  bg-light rounded-pill mx-2 shadow'><span className=' fs-4 d-flex  justify-content-center mx-auto'><Facebook/></span></p>
           <p className='p-3  bg-light rounded-pill mx-2 shadow'><span className=' fs-4 d-flex  justify-content-center mx-auto'><Instagram/></span></p>
           </div>
           </div>
           
           </div>
         
           <div className='col-md-6 pt-5 ps-5 '>

          <form className='shadow w-100  p-5 pt-5 bg-light ' onSubmit={FOrmHandeling}>

          <p className='fs-4 fw-bold  '>What do you want to ask </p>
       
          <label htmlFor="Full Name" className='py-2  '>Full Name</label>
           <input type="text" ref={Name} name='Name' placeholder='Your name' className='w-100  rounded form-control form-control'/> 

        <label htmlFor="Email address" className='py-2'>Email address</label>
        <input type="text" ref={Email} name='Email' placeholder='Emaail address' className='w-100  rounded  b form-control'/>
       <label htmlFor="Message" className='py-2'>Message</label>
         <textarea type="text" ref={Message} name='Message' placeholder='Message' className='w-100 rounded   form-control' rows="3" />
        <button type="submit" className="btn btn-dark rounded py-2 shadow w-100 mt-4">Get in Touch</button>
        
          </form>
          </div>
    </div>

 </>
  )
}
