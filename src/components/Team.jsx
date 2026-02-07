import ceo from '../assets/images/CEO.jpg'
import coFounnder from '../assets/images/cofounder.jpg'
import Head_of_Growth from '../assets/images/headofgrowth.jpg'
import App_developer from '../assets/images/app_developer.jpg'
import Web_developer from '../assets/images/web developer.jpg'
import Vedio_editor from '../assets/images/video editor.jpg'


export default function Team() {
  return (
    <>
    <div className='container-fluid bg-warning '>
         <h1 className='fs-1 fw-bold text-center pt-5'>Our Team</h1>
         <p className='  fw-normal text-center fs-4'>our passionate team collaborates seamlessly to create solution</p>
           <div className='row container-fluid  d-flex  justify-content-center align-item-center mx-auto '>
             <div className='col-md-3 bg-light m-3 rounded py-4 pb-0 d-flex flex-column shadow'>
             <img src={ceo} alt="" className='Images image-fluid  mx-auto shadow' />
             <p className='text-center m-0 pb-0 fs-4'>Jack</p>
             <p className='text-center pt-1'>Founder&CEO</p>
             </div>
             
             <div className='col-md-3 bg-light m-3  rounded py-4 pb-0 d-flex flex-column shadow'>
             <img src={coFounnder} alt="" className='Images image-fluid  mx-auto ' />
             <p className='text-center m-0 pb-0 fs-4'>John</p>
             <p className='text-center pt-1'>CoFounder&CTO</p>
             </div>

            <div className='col-md-3 bg-light m-3 rounded py-4 pb-0 d-flex flex-column shadow '>
             <img src={Head_of_Growth} alt="" className='Images image-fluid  mx-auto ' />
             <p className='text-center m-0 pb-0 fs-4'>Emily</p>
             <p className='text-center pt-1'>Head of Growth</p>
             </div>

            </div>
             <div className='row container-fluid  d-flex  justify-content-center mx-auto '>
             <div className='col-md-3 bg-light m-3 rounded py-4 pb-0 d-flex flex-column shadow'>
             <img src={App_developer} alt="" className='Images image-fluid  mx-auto ' />
             <p className='text-center m-0 pb-0 fs-4'>Sam</p>
             <p className='text-center pt-1'>App Developer</p>
             </div>

             <div className='col-md-3 bg-light m-3 rounded py-4 pb-0 d-flex flex-column shadow'>
             <img src={Web_developer} alt="" className='Images image-fluid  mx-auto ' />
             <p className='text-center m-0 pb-0 fs-4'>Antonia</p>
             <p className='text-center pt-1'>Web Developer</p>
             </div>

            <div className='col-md-3 bg-light m-3 rounded py-4 pb-0 d-flex flex-column shadow'>
             <img src={Vedio_editor} alt="" className='Images image-fluid  mx-auto ' />
             <p className='text-center m-0 pb-0 fs-4'>Mark</p>
             <p className='text-center pt-1'>Video Editor</p>
             </div>

            </div>
          
          
         </div>

        
         
    </>
  )
}
