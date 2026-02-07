import { useRef } from 'react'
import signIn from '../assets/images/login.jpg'
import { Google } from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
import NavbarApp from './NavbarApp'
export default function SignIn() {
// using hooks
  const Email = useRef("");
  const Password = useRef("");

  const formHandeler = (e)=>{
   e.preventDefault();
    var ins={
      Email:Email.current.value,
      Password:Password.current.value,
    }
    
    e.target.reset();
  //  alert("email is:"+ins)
  console.log(ins);
  }
  return (
    <>
 <NavbarApp/>
    <div className='row container-fluid mx-auto'>
       
        <div className='col-md-7 image-fluid'>
           <img src={signIn} alt="" className='w-100 img-responsive'/>
        </div>
        <div className='col-md-5 ps-5 pt-5 shadow  container bg-light '>
        <h1 className='fw-bolder text-center'>WELCOME BACK</h1>
        <p className='fw-normal text-center'>Welcome back! Please enter your details.</p>
        
        
        <form onSubmit={formHandeler} >
        
           <label className='py-2  fw-bold'>Email</label>
           <input type="email" ref={Email}  placeholder='Your Email' className='w-100  rounded   shadow p-2 mb-3 form-control'/> 

          <label className='py-2 fw-bold'>Password</label>
          <input type="text"  ref={Password}   placeholder='********' className='w-100  rounded   form-control shadow p-2 mb-3'/>

           <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label ps-2" > Reminder Me</label>

          <a className='mx-4'>Forgot Password</a>
   
          <input type='submit'   className='btn btn-danger w-100  rounded-pill mt-3' value="Book appointment" />
         <button type ="button" className='btn btn-white w-100 border mt-3 rounded-pill'><Google className='fs-4 me-4'/>Sign in with Google</button>
         <p className='pt-3'>Don&apos;t have an account? <Link to="/signup" href="#" >Sign-up for free</Link></p>
   
         </form>
         </div>
 
    </div>

    
    </>
  )
}
