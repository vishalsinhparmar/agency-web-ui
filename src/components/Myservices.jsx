import digital from '../assets/images/digital.jpg'
import webite from '../assets/images/web-dev.jpg'
import social_media  from '../assets/images/social-media.jpg'
import app_dev from '../assets/images/web_developement.jpg'
import video_editing from '../assets/images/video additing.jpg'
import consulting from '../assets/images/consultiing.jpg'
import  './image.css'
import NavbarApp from './NavbarApp'
import Contact from './Contact'

export default function Myservices() {
  return (
    <>
    <NavbarApp/>
    <div className='container-fluid py-5  '>
         <h1 className='fs-1 fw-bold text-center pt-5'>Our Services</h1>
         <p className='  fw-normal text-center fs-4'>Uncover new paths, explore opportunities and chart your success with us.</p>
         <div className="row g-5  mx-1 container-fluid ">
            <div className="col-md-4  position-relative " >
             <img src={digital} alt="" className='w-100   h-100 rounded image-fluid  opacity-50'/>
             <div className="position-absolute bottom-0 start-25 p-4 " >
                <h1 className='fs-3 text-dark fw-bold '>Digital Marketing</h1>
             </div>
            </div>
            <div className="col-md-4 position-relative ">
             <img src={webite} alt="" className='w-100  h-100  image-fluid rounded opacity-50'/>
             <div className="position-absolute bottom-0 start-25 p-4 " >
                <h1 className='fs-3 text-dark fw-bold '>Website Development</h1>
             </div>
            </div>
            <div className="col-md-4 Container position-relative ">
             <img src={social_media} alt="" className='w-100 h-100  image-fluid rounded opacity-50'/>
             <div className="position-absolute bottom-0 start-25 p-4 " >
                <h1 className='fs-3 text-dark fw-bold '>Social Media Management</h1>
             </div>
            </div>
          
            <div className="col-md-4 Container position-relative ">
             <img src={app_dev} alt="" className='w-100  h-100   image-fluid rounded opacity-50'/>
             <div className="position-absolute bottom-0 start-25 p-4 " >
                <h1 className='fs-3 text-dark fw-bold '>App Development</h1>
             </div>
            </div>
            <div className="col-md-4  Container position-relative ">
             <img src={video_editing} alt="" className='w-100  h-100  image-fluid rounded bg-white opacity-50'/>
             <div className="position-absolute bottom-0 start-25 p-4 " >
                <h1 className='fs-3 text-dark fw-bold '>Video Editing</h1>
             </div>
            </div>
            <div className="col-md-4 position-relative   ">
             <img src={consulting} alt="" className='w-100 h-100 image-fluid rounded opacity-50'/>
             <div className="position-absolute bottom-0 start-25 p-4 " >
                <h1 className='fs-3 text-dark fw-bold '>Consulting</h1>
             </div>
            </div>
            
            
         </div>
     </div>
     
<Contact/>
    </>
  )
}
