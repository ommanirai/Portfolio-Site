import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='row bg-secondary'>
        <div className='col-lg-1'></div>
        <div className='col-lg-2 col-md-3 col-sm-3 p-3 mt-4'>
          <h1>Menu</h1>
          <ul className="fs-4 mt-2 ps-0">
            <li>
              <a className="text-dark text-decoration-none" aria-current="page" href="#">Home</a>
            </li>
            <li>
              <a className="text-dark text-decoration-none" href="#">Portfolio</a>
            </li>
            <li>
              <a className="text-dark text-decoration-none" href="#">Skills</a>
            </li>
            <li>
              <a className="text-dark text-decoration-none" href="#">Experience</a>
            </li>
            <li>
              <a className="text-dark text-decoration-none" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 p-3 mt-4'>
          <h1>Archives</h1>
          <ul className="fs-4 mt-2 ps-0">
            <li>
              <a className="text-dark text-decoration-none" aria-current="page" href="#">March 2022</a>
            </li>
            <li>
              <a className="text-dark text-decoration-none" href="#">April 2022</a>
            </li>
            <li>
              <a className="text-dark text-decoration-none" href="#">May 2022</a>
            </li>
            <li>
              <a className="text-dark text-decoration-none" href="#">June 2022</a>
            </li>
            <li>
              <a className="text-dark text-decoration-none" href="#">July 2022</a>
            </li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-2 col-sm-4 p-3 mt-4'>
          <h1>Widget</h1>
          {/* <p className='mt-2 fs-5'>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write, I like to think, I like to dream, I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night, I like to feel the music flowing on my face. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cnannot sleep in the middle of the night.</p> */}
          <p className='mt-2 fs-5'>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience.</p>
        </div>
        <div className='col-lg-4 col-md-4 p-3 mt-4'>
          <h1>Follow</h1>
          <div className='text-white mb-4 mt-2'>
            <i className="bi bi-facebook fs-3 p-5"></i>
            <i className="bi bi-twitter fs-3"></i>
            <i className="bi bi-google fs-3 p-5"></i>
            <i className="bi bi-linkedin fs-3"></i>
          </div>
        </div>
        <div className="text-center fs-4 text-white p-5">
          <p> &copy; 2022 Resume. All rights reserved | Developed by: <a href="Ommanirai.com" className='text-decoration-none'>Ommani Rai</a></p>
        </div>
      </div>
    </>
  )
}

export default Footer