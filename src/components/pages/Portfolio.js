import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <>
      <h1 className='text-center text-decoration-underline mt-5'>PORTFOLIO</h1>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className='row'>
          <div className='col-md-2'>
            <button class="carousel-control-prev text-center fs-1 text-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <i className="bi bi-arrow-left" id='arrow'></i>
              <span class="visually-hidden">Previous</span>
            </button>
          </div>
          <div className='col-md-8 mt-5'>
            <div className="carousel-inner">
              <div className="carousel-item active text-white">
                <div className='row'>
                  <div className='col-md-8'>
                    <div className='user-img text-center'>
                      <img src='./../../images/image1.jpg' className='rounded-3 img mb-5' alt='Portfolio Image' /><br />
                      <div className='btn btn-outline-info btn-lg'>Browser Portfolio</div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='user-text'>
                      <h5 className='text-secondary py-1'>CLIENT</h5>
                      <p className='text-dark pb-3'>Apple</p>
                      <h5 className='text-secondary pb-1'>ROLE IN PROJECT</h5>
                      <p className='text-dark pb-3'>Designer Lead</p>
                      <h5 className='text-secondary pb-1'>PROJECT INCLUDED</h5>
                      <p className='text-dark pb-3'>Mobile and Web Interface</p>
                      <div className='btn btn-outline-info btn-lg'>Browser</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item text-white">
                <div className='row'>
                  <div className='col-md-8'>
                    <div className='user-img text-center'>
                      <img src='./../../images/image1.jpg' className='rounded-3 img mb-5' alt='Portfolio Image' /><br />
                      <div className='btn btn-outline-info btn-lg'>Browser Portfolio</div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='user-text'>
                      <h5 className='text-secondary py-1'>CLIENT</h5>
                      <p className='text-dark pb-3'>Apple</p>
                      <h5 className='text-secondary pb-1'>ROLE IN PROJECT</h5>
                      <p className='text-dark pb-3'>Designer Lead</p>
                      <h5 className='text-secondary pb-1'>PROJECT INCLUDED</h5>
                      <p className='text-dark pb-3'>Developing games in Android Mobiles</p>
                      <div className='btn btn-outline-info btn-lg'>Browser</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item text-white">
                <div className='row'>
                  <div className='col-md-8'>
                    <div className='user-img text-center'>
                      <img src='./../../images/image1.jpg' className='rounded-3 img mb-5' alt='Portfolio Image' /><br />
                      <div className='btn btn-outline-info btn-lg'>Browser Portfolio</div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='user-text'>
                      <h5 className='text-secondary py-1'>CLIENT</h5>
                      <p className='text-dark  pb-3'>Apple</p>
                      <h5 className='text-secondary pb-1'>ROLE IN PROJECT</h5>
                      <p className='text-dark pb-3'>Designer Lead</p>
                      <h5 className='text-secondary pb-1'>PROJECT INCLUDED</h5>
                      <p className='text-dark pb-3'>Responsive Mobile Websites Templates</p>
                      <div className='btn btn-outline-info btn-lg'>Browser</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <button class="carousel-control-next text-center fs-1 text-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <i className="bi bi-arrow-right" id='arrow'></i>
              <span class="visually-hidden">Next</span>
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
