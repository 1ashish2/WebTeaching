import React, { useEffect } from 'react'
import CardInfo from './cardInfo';
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from './Portfolio';
// import Counting from './Counting';
import { useNavigate } from "react-router-dom"
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

        <div className="container marketing">

          

          <div className="row">
            <div className="col-lg-4">
              <i className="fa fa-book icon" style={fontStyle}></i>
              {/* <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" /> */}
              <h2>IB COURSES</h2>
              <p>Provide online training through Skype
                sessions and interactive white board
                facility.</p>   <p><a className="btn btn-default" href="#" role="button">Contact For Demo &raquo;</a></p>
            </div>

            <div className="col-lg-4">
              <i className="fa fa-graduation-cap icon" style={fontStyle}></i>
              {/* <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" /> */}
              <h2>IGCSE COURSES</h2>
              <p>Provide online training through Skype
                sessions and interactive white board
                facility.</p><p><a className="btn btn-default" href="#" role="button">Contact For Demo &raquo;</a></p>
            </div>

            <div className="col-lg-4">
              <i className="fa fa-certificate icon" style={fontStyle}></i>
              {/* <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" /> */}
              <h2>TRAINING MODE</h2>
              <p>Provide online training through Skype
                sessions and interactive white board
                facility.</p>
              <p><a className="btn btn-default" href="#" role="button">Contact For Demo &raquo;</a></p>
            </div>

          </div>
 
        

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-responsive center-block" src="https://gdgws.gdgoenka.com/wp-content/uploads/2019/01/ibprograme.png" alt="Generic placeholder image" />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 col-md-push-5">
              <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5 col-md-pull-7">
              <img className="featurette-image img-responsive center-block" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/asia-student-group-in-university-work-hard-togather-for-make-a-r-anek-suwannaphoom.jpg" alt="Generic placeholder image" />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-responsive center-block" src="https://www.ibyb.org/images/uploads/3a2b9ac2f94c83aeb2f8121bb9b1ef43.jpg" alt="Generic placeholder image" />
            </div>
          </div>
        </div>

        <div className="container-fluid" style={mainHeading3}>
          <div className="row" style={{ margin: "auto" }}>
            <div className="row  text-center">
              <i className="fa fa-star" style={iconStyle}></i>
              <i className="fa fa-star" style={iconStyle2}></i>
              <i className="fa fa-star" style={iconStyle3}></i>
              <i className="fa fa-star" style={iconStyle2}></i>
              <i className="fa fa-star" style={iconStyle}></i>
            </div>
            <div className="row text-center" style={{ color: "rgb(56, 16, 94)" }}>
              <h2>AMIT'S IB CHEMISTRY EDUCATION</h2>
            </div>
            <hr style={{ backgroundColor: "rgb(142, 240, 13)", height: "2PX" }} />
          </div>
        </div>
       
        <div className="container-fluid mb-2" style={{ backgroundColor: "white" }}>
        
          <div className="row">
            <div className="col-md-6 col-sm-12" data-aos="zoom-in">
              <img src="https://everfi.com/wp-content/uploads/2019/09/b4b-1-alt.png" className="img-responsive" alt="Responsive image" />

            </div>
            <div className="col-md-6 col-sm-12 info-className">
              <div className="row">
                <h3 style={{ color: "rgb(56, 16, 94)" }}><i className="fa fa-user" style={fontStyle2}></i>Our Faculty</h3>
                <p style={{ fontSize: "1.6rem" }}>Having more than 10 years of experience Mr Amit Kumar is proficient in handling IB , IGCSE, ACT & SAT along with other Chemistry Subjects.</p>
              </div>
              <div className="row">
                <h3 style={{ color: "rgb(56, 16, 94)" }}><i className="fa fa-book" style={fontStyle2}></i>Course Reach </h3>
                <p style={{ fontSize: "1.6rem" }}>We are offering our online tutoring service to the students of the major cities belonging to different countries all over the world.</p>
              </div>
              <div className="row">
                <h3 style={{ color: "rgb(56, 16, 94)" }}><i className="fa fa-thumbs-o-up" style={fontStyle2}></i>Our USP </h3>
                <p style={{ fontSize: "1.6rem" }}>We teach online through interactive sessions, pertaining to the needs of students individually in a customized manner.</p>
              </div>
              <div className="row">
                <h3 style={{ color: "rgb(56, 16, 94)" }}><i className="fa fa-laptop" style={fontStyle2}></i>Teaching Tools</h3>
                <p style={{ fontSize: "1.6rem" }}>We offer online training through face to face skype video sessions while sharing the interactive white board for explanation purpose.</p>
              </div>
            </div>
          </div>
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

        <div className="container-fluid" style={{ backgroundColor: "white" }}>
          <div className="row">
            
            <div className="col-md-6">
              <div className="row text-center info-target" >
                <div className="col-md-3 col-sm-12" style={{ height: "20rem", display: "flex", flexWrap: "wrap" }} >
                  <div style={{ display: "flex", flexWrap: "wrap", width: "10rem", height: "10rem", margin: "auto", backgroundColor: "rgba(73, 109, 226, 0.7)", borderRadius: "5rem" }}>
                    <i className="fa fa-line-chart" style={{ fontSize: "46px", color: "white", margin: "auto" }}></i>
                  </div>

                </div>
                <div className="col-md-8 col-sm-12 text-left">
                  <h2 style={{ paddingTop: "3rem" }}>Our Values</h2>
                  <p style={{ fontSize: "1.6rem" }}>We extend values beyond the classNameroom by making sure skills and concepts taught in our online sessions are realistically beneficial in the world beyond school</p>
                </div>
              </div>
              <div className="row info-target" >
                <div className="col-md-3" style={{ height: "20rem", display: "flex", flexWrap: "wrap" }} >
                  <div style={{ display: "flex", flexWrap: "wrap", width: "10rem", height: "10rem", margin: "auto", backgroundColor: "rgba(73, 109, 226, 0.7)", borderRadius: "5rem" }}>
                    <i className="fa fa-trophy" style={{ fontSize: "46px", color: "white", margin: "auto" }}></i>
                  </div>

                </div>
                <div className="col-md-8 text-left" >
                  <h2 style={{ paddingTop: "3rem" }}>Our Approach</h2>
                  <p style={{ fontSize: "1.6rem" }}>Offering a friendly environment in which student can successfully learn basic skills and core academic content, develop his or her special talents and social competencies</p>
                </div>
              </div>

              <div className="row info-target" >
                <div className="col-md-3" style={{ height: "20rem", display: "flex", flexWrap: "wrap" }} >
                  <div style={{ display: "flex", flexWrap: "wrap", width: "10rem", height: "10rem", margin: "auto", backgroundColor: "rgba(73, 109, 226, 0.7)", borderRadius: "5rem" }}>
                    <i className="fa fa-key" style={{ fontSize: "46px", color: "white", margin: "auto" }}></i>
                  </div>

                </div>
                <div className="col-md-8 text-left">
                  <h2 style={{ paddingTop: "3rem" }}>Our Mission</h2>
                  <p style={{ fontSize: "1.6rem" }}>Inspiring students to achieve potential and personal goals through activities that are developmentally suitable, discretely paced, and personalized to each student’s academic performance and interest.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12" style={{ paddingTop: "1rem" }} data-aos="zoom-in">
              <img src="https://www.pngplay.com/wp-content/uploads/4/Student-Background-PNG.png" className="img-responsive" alt="Responsive image" />
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
              <h2>AMIT'S IB CHEMISTRY EDUCATION</h2>
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
