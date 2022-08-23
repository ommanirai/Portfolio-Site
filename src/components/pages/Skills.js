import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <>
      <div className='row bg-white'>
        <h1 className='text-decoration-underline text-center mt-5 mb-4'>SKILLS</h1>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <p className='fs-3 mb-5'>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write, I like to think, I like to dream, I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night, I like to feel the music flowing on my face. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cnannot sleep in the middle of the night.</p>
          {/* <button class="buttonload"> */}
          <div className='row text-center'>
            <div className='col-md-4 icon-img mx-4 mb-4'>
              {/* <i className="fa fa-circle-o-notch text-white fs-1 fw-bold mb-3"></i><br /> */}
              <p className='fs-4 text-center pt-5'>80%</p>
              <p className='mb-5 fs-4 text-center'>User Interface</p>

            </div>
            <div className='col-md-4 icon-img1 mx-4 mb-4'>
              {/* <i className="fa fa-circle-o-notch text-white fs-1 fw-bold mb-3"></i><br /> */}
              <p className='fs-4 text-center pt-5'>85%</p>
              <p className='mb-5 fs-4 text-center'>Front End</p>
            </div>
            <div className='col-md-4 icon-img2 mx-4 mb-4'>
              {/* <i className="fa fa-circle-o-notch text-white fs-1 fw-bold mb-3"></i><br /> */}
              <p className='fs-4 text-center pt-5'>90%</p>
              <p className='mb-5 fs-4 text-center'>User Experience</p>
            </div>
            <div className='icon-img3 mx-4 mb-4'>
              {/* <i className="fa fa-circle-o-notch text-white fs-1 fw-bold mb-3 mt-4"></i><br /> */}
              <p className='fs-4 text-center pt-5'>90%</p>
              <p className='mb-5 fs-4 text-center'>User Experience</p>
            </div>

          </div>

          {/* </button> */}
        </div>
        <div className='col-md-3'></div>
      </div>
    </>
  )
}

export default Skills