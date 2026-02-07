import { useRef } from 'react'
import signIn from '../assets/images/signup_img.jpg'
import Swal from 'sweetalert'
import { Google } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import NavbarApp from './NavbarApp'
import emailjs from '@emailjs/browser'
export default function SignUp() {
  const Name = useRef("");
  const Email = useRef("");
  const Password = useRef("");

  const ServiceID ="service_swte3y8";
  const temlateID="template_scesmeb";
  const PublicID="ziVVxwAnkD2noY914";

  const FormHandeling = (e)=>{
    e.preventDefault();

  

    const ins = {
      myName:Name.current.value,
      myEmail:Email.current.value,
      myPassword:Password.current.value
    }
    
    emailjs.sendForm(ServiceID,temlateID,e.target,PublicID);
   fetch(`http://localhost:3000/SignUp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ins),
   }).then(() => {
    Swal({
      title: "Good job!",
      text: "You are successfully SignUp!",
      icon: "success",
      button: "SignUp!",
    });
    e.target.reset();
   }).catch(() => {
    Swal({
      title: "Something went wrong",
      text: "Please try again in a moment.",
      icon: "error",
      button: "Ok",
    });
   });
   
  }
    return (
    <>

<NavbarApp/>
<div className='row container-fluid mx-auto'>
       
       <div className='col-md-7 image-fluid'>
          <img src={signIn} alt="" className='w-100  object-fit-cover img-responsive'/>
       </div>
       <div className='col-md-5 p-5 pt-3  shadow  container bg-white '>
       <h1 className='fw-bolder '>Sign Up</h1>
       <p className='fw-normal '>Join us now to access umlimited features and seamless user experience</p>
       
       {/* signup form */}
       <form className='mt-2' onSubmit={FormHandeling}>
         
        <label htmlFor="Full Name" className='py-2  fw-bold'>Name</label>
        <input type="text" ref={Name} name="Name"  placeholder='Your Name' className='w-100  rounded  shadow p-2 mb-3 form-control'/> 

        <label htmlFor="Email address" className='py-2 fw-bold'>Email</label>
        <input type="email" ref={Email} name="Email" placeholder='Your Email' className='w-100  rounded   shadow p-2 mb-3 form-control'/>
     
        <label htmlFor="Email address" className='py-2 fw-bold'>Password</label>
        <input type="password" ref={Password} name="Password" placeholder='********' className='w-100  rounded   form-control shadow p-2 mb-3'/>
        
        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label ps-2 d-inline" htmlFor="flexCheckDefault"> By signing up,you agree to your <span className='fw-bolder'>Terms of Service</span></label>
      

      <button type ="submit" className='btn btn-success w-100  rounded mt-4'>Sign Up</button>
      <button type ="button" className='btn btn-white w-100 border mt-3 rounded'><Google className='fs-4 me-4'/>Continue  with Google</button>
        <p className='pt-3 text-center mt-3'>Alreaday have an account? <Link to="/signin" href='#'>Sign-In</Link></p>
      
        </form>
        </div>

   </div>
   
    </>
  )
}
