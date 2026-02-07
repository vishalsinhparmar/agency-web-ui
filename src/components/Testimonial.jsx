import ceo from '../assets/images/CEO.jpg'
import  './image.css'

export default function Testimonial() {
  return (
    <>

          <div className='container-fluid bg-warning pb-5 p-3'>
         <h1 className='fs-1 fw-bold text-center pt-5'>Testimonials</h1>
         <p className='  fw-normal text-center fs-4'>What Our Clients Says About Us</p>
       <div className=' bg-light rounded-pill shadow  w-100  mx-auto  px-5 py-4'>
          <p className='text-center fw-bold'>&quot;I really like this marketing agency.They are very professional<br/>
               and know how to get the job done.I would recommend them to<br/> anyone&quot;</p>
               <div className='w-100 d-flex justify-content-center align-item-center image-respomsive'>
               <img src={ceo} alt="" className='Image mx-auto image-fluid' />
               
               </div>
               <p className='text-center'>jack <span>Founder&CEO</span></p>
       </div>
         
         </div>
    
    </>
  )
}
