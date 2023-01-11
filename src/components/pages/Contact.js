import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='row '>
        <h1 className='text-center text-decoration-underline mt-5 mb-4'>CONTACT</h1>
        <div className='col-md-1 mt-4'></div>
        <div className='col-md-6 mb-5 mt-4'>
          <div className='row'>
            <div className='col-md-5 position-relative'>
              <input className="form-control form-control-lg position-absolute start-0" type="text" placeholder="Username" />
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-5 position-relative'>
              <input className="form-control form-control-lg position-absolute end-0" type="text" placeholder="Email" />
            </div>
          </div><br /><br /><br />
          <input className="form-control form-control-lg mb-5" type="text" placeholder="Cost Of Your Project" />
          <input className="form-control form-control-lg mb-5" type="text" placeholder="Timeline" />
          <div className="form-group">
            <textarea className="form-control  form-control-lg mb-5" id="exampleFormControlTextarea1" rows="4" placeholder='Do Not Forget That Kindness is All!'></textarea>
          </div>
          <div className='btn btn-danger btn-lg'>Send</div>
        </div>
        <div className='col-md-1 mt-4'></div>
        <div className='col-md-3 mt-4'>
          <h2 className='fw-bold mb-3 text-secondary'>Location</h2>
          <p className='mb-3 text-secondary'>Hattiban, Lalitpur 44700</p>

          <h2 className='fw-bold text-secondary'>I AM SOCIAL</h2>
          <div className='text-secondary mb-4'>
            <i className="bi bi-facebook fs-3 p-5"><a className='p-5 text-decoration-none text-secondary'>Facebook</a></i><br />
            <i className="bi bi-twitter fs-3 p-5"><a className='p-5 text-decoration-none text-secondary'>Twitter</a></i><br />
            <i className="bi bi-google fs-3 p-5"><a className='p-5 text-decoration-none text-secondary'>Google</a></i><br />
            <i className="bi bi-linkedin fs-3 p-5"><a className='p-5 text-decoration-none text-secondary'>Linkedin</a></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact