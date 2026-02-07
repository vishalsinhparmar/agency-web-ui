import section from '../assets/images/image1.jpg'
import google from '../assets/images/GOOGLE.png'
import microsoft from '../assets/images/microsoft.png'
import spotify from '../assets/images/Spotify.png'
import NavbarApp from './NavbarApp'
import Contact from './Contact'
import netflix from '../assets/images/NETFLIX.png'

export default function Homepage() {
  return (
    <>
     <NavbarApp/>
    <div className=' bg-warning'>
       <div className="row  pt-5  container-fluid  ps-5  pb-5  ">
          <div className=" col-md-7  " >
             <p className='fs-1 fw-bold lh-sm text-wrap'>DIGITAL MARKETING SOLUTIONS <span className='text-secondary'>FOR AMBITIOUS BRAND</span></p>
             <p>Super Charge Your Brand Performence With Performence Based 
                 and Specialized Digital Marketing & Development Solution
             </p>
             <div className='d-flex flex-row  align-items-baseline'>
             <button type="button" className="btn btn-dark rounded-pill py-2 shadow">Get Started</button>
             <p className='mx-4'>Read success stories</p>
             </div>
          </div>
          <div className="col-md-5  contaier-fluid mt-3 ">
            <div className="w-100 image-fluid ">
             <img src={section} alt=""  className='w-100  image-fluid shadow rounded-pill img-responsive'/>
             </div>
             </div>
             </div>
       </div>
         <p className='my-4 pt-5 fw-normal text-center fs-4'> Trusted by the world&apos;s most Popular Brands</p>

         <div className='row container-fluid d-flex flex-row  align-items-baseline mx-auto'>
            <div className=' col  image-fluid'>
            <img src={google} alt=""  className='  w-100  img-responsive'/>
            </div>
            <div className=' col image-fluid '>
            <img src={microsoft} alt=""  className='  w-100 img-responsive'/>
            </div>
            <div className=' col image-fluid '>
            <img src={spotify} alt=""  className='  w-100  img-responsive'/>
            </div>
            <div className=' col  image-fluid '>
            <img src={netflix} alt=""  className='  w-100 image-responsive'/>
            </div>
         </div>
    <Contact/> 
  
  </>

  )
}
