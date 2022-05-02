import React, { useEffect } from 'react'
import CardInfo from './cardInfo';
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from './Portfolio';
// import Counting from './Counting';
import { useNavigate } from "react-router-dom"
import Feature from './Feature';
import Service from './Service';
const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const handleCourse = () => {
    navigate("/ibcurriculum")
  }
  const mainHeading = {
    height: "32rem", color: "rgb(56, 16, 94)", backgroundColor: "white",
  }
  const mainHeading2 = {
    height: "18rem", display: "flex", flexWrap: "wrap", width: "99%",
  }
  const mainHeading3 = {
    height: "15rem", display: "flex", flexWrap: "wrap", backgroundColor: "white",marginTop:"5rem"
  }
  const fontStyle = {
    fontSize: "80px", color: "rgb(56, 16, 94)"
  }
  const fontStyle2 = {
    color: "rgb(56, 16, 94)", paddingRight: "2rem"
  }
  const iconStyle = {
    fontSize: "16px", color: "rgb(123, 255, 0)"
  }
  const iconStyle2 = {
    fontSize: "26px", color: "rgb(123, 255, 0)"
  }
  const iconStyle3 = {
    fontSize: "36px", color: "rgb(123, 255, 0)"
  }
  return (
    <>
      <div >


        <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" style={{ marginTop: "0.5rem" }}>

          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="fill first-slide">
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Example headline.</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="fill second-slide">
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="fill third-slide">
                <div className="container">
                  <div className="carousel-caption">
                    <h1>One more for good measure.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      <Feature />
      <div className='container'>
      <Service />
      </div>
       
        
        <div className="container-fluid" style={{ backgroundColor: "rgba(22, 18, 18,0.9)", minHeight: "20rem",marginTop:"5rem",marginBottom:"5rem", color: "white" }}>
          <div className="row" >
            <div className="col-md-10 " style={{ display: "flex", flexWrap: "wrap", height: "20rem" }}>
              <div className="container" style={{ margin: "auto" }}>
                <h3>WE MAKE CHEMISTRY SO SIMPLE FOR YOU</h3>
                <p>We are here to provide the best tutoring service online for all the IB, IGCSE and other Chemistry Subjects. Enroll with us to drive away the fear of Chemistry.</p>

              </div>
            </div>
            <div className="col-md-2" style={{ display: "flex", flexWrap: "wrap", height: "20rem" }}>
              <div className="container" style={{ margin: "auto" }}>
                <button className="btn btn-danger" onClick={handleCourse}>VIEW COURSES</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ height: "20rem", display: "flex", flexWrap: "wrap", backgroundColor: "white" }}>
          <div className="row" style={{ margin: "auto" }}>
            <div className="row  text-center">
              <i className="fa fa-star" style={iconStyle}></i>
              <i className="fa fa-star" style={iconStyle2}></i>
              <i className="fa fa-star" style={iconStyle3}></i>
              <i className="fa fa-star" style={iconStyle2}></i>
              <i className="fa fa-star" style={iconStyle}></i>
            </div>
            <div className="row text-center" style={{ color: "rgb(56, 16, 94)" }}>
              <h2>AMIT'S IB EDUCATION</h2>
            </div>
            <hr style={{ backgroundColor: "rgb(142, 240, 13)", height: "2PX" }} />
          </div>

        </div>
        <section className="wrapper container-fluid" >

          <div className="row text-center" style={{ marginTop: "0rem" }}>
            <div className="col-md-3">
              <div className="counter">
                <i className="fa fa-code fa-2x"></i>
                <h2 className="timer count-title count-number" data-to="100" data-speed="1500">950+</h2>
                <p className="count-text ">Total Students</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter">
                <i className="fa fa-coffee fa-2x"></i>
                <h2 className="timer count-title count-number" data-to="1700" data-speed="1500">950+</h2>
                <p className="count-text ">Happy Students</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter">
                <i className="fa fa-lightbulb-o fa-2x"></i>
                <h2 className="timer count-title count-number" data-to="11900" data-speed="1500">100%</h2>
                <p className="count-text ">Success rate</p>
              </div></div>
            <div className="col-md-3">
              <div className="counter">
                <i className="fa fa-bug fa-2x"></i>
                <h2 className="timer count-title count-number" data-to="157" data-speed="1500">800+</h2>
                <p className="count-text ">Demo With Students</p>
              </div>
            </div>
          </div>

        </section>
        <hr />
        <div className="container-fluid testmonial">
          <div className="testimonial-slider">
            <ul className="slider">
              <li>
                <div className="testimonial-slider-content">
                  <q>The best way to predict your future is to create it.</q>
                  <p className="source">- Abraham Lincoln</p>
                </div>
              </li>
              <li>
                <div className="testimonial-slider-content">
                  <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
                  <p className="source">- Ernest Hemingway</p>
                </div>
              </li>
              <li>
                <div className="testimonial-slider-content">
                  <q>I have not failed. I've just found 10,000 ways that won't work.</q>
                  <p className="source">- Thomas A. Edison</p>
                </div>
              </li>
              <li>
                <div className="testimonial-slider-content">
                  <q>Don't let what you cannot do interfere with what you can do.</q>
                  <p className="source">- John Wooden</p>
                </div>
              </li>
            </ul>
          </div>
        </div>


      </div>
      <hr />
      <Portfolio />
     
     
      
    </>
  );
}

export default Home;
