import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='bg-img row bgscreen'>
                <div className='col-lg-4 col-md-3 col-sm-4 text-center mt-5 h-25'>
                    <a className='fs-1 fw-bold text-white text-decoration-none' href="#">Resume</a>
                </div>
                <div className='col-lg-8 col-md-9 col-sm-8'>
                    <nav className="navbar navbar-expand-lg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <ul className="w-100 d-flex justify-content-evenly fs-4 mt-5">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className='row'>
                        <div className='col-md-3'>
                            <button className="carousel-control-prev control-left text-center fs-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                <i className="bi bi-arrow-left" id='arrow'></i>
                                <span className="visually-hidden">Previous</span>
                            </button>
                        </div>
                        <div className='col-md-6'>
                            <div className="carousel-inner">
                                <div className="carousel-item active text-center text-white">
                                    {/* <img src="./../../images/image4.jpg" className="d-block w-100" alt="..." /> */}
                                    <h1 className='fw-bold'>DESIGNER AND DEVELOPER</h1>
                                </div>
                                <div className="carousel-item text-center text-white">
                                    {/* <img src="./../../images/image1.jpg" className="d-block w-100" alt="..." /> */}
                                    <h1 className='fw-bold'>DESIGNER AND DEVELOPER</h1>
                                </div>
                                <div className="carousel-item text-center text-white">
                                    {/* <img src="./../../images/image3.jpg" className="d-block w-100" alt="..." /> */}
                                    <h1 className='fw-bold'>DESIGNER AND DEVELOPER</h1>
                                </div>
                            </div>
                            <div className='text-center'>
                                <p className='text-white fs-3'>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience.</p>
                                <button type="button" class="btn btn-outline-info btn-lg">Read Now</button>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <button className="carousel-control-next control-right text-center fs-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                                <i className="bi bi-arrow-right" id='arrow'></i>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


            <div className='bg-img small-screen'>
                <div className='row'>
                    <div className='col-6 text-center mt-5 h-25'>
                        <a className='fs-1 fw-bold text-white text-decoration-none' href="#">Resume</a>
                    </div>

                    <div className="col-6 mobile-container " id="navbarSupportedContent">
                        <div className="topnav">
                            <div id="myLinks">
                                <a href="#news">Home</a>
                                <a href="#about">Portfolio</a>
                                <a href="#about">Skills</a>
                                <a href="#about">Experience</a>
                                <a href="#contact">Contact</a>
                            </div>
                            <a href=" " className="icon" >
                                {/* <a href=" " className="icon" onClick="myFunction()"> */}
                                <i className="bi bi-list"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/* {
                function myFunction() {
                    var x = document.getElementById("myLinks");
                    if (x.style.display === "block") {
                        x.style.display = "none";
                    } else {
                        x.style.display = "block";
                    }
                }
            } */}
        </>
    )
}

export default Navbar