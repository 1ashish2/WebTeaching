import React from 'react';
import "./service.css";
function Service(props) {
    return (
        <div className="containers">
        <h1>Our Services</h1>
        <div className="row">
          <div className="col-sm-12 col-md-4 services">
            <i className="fas fa-chart-line"></i>
            <h2>OUR VALUES</h2>
            <p>
            We extend values beyond the classroom by making sure skills and concepts taught in our online sessions are realistically beneficial in the world beyond school.
            </p>
          </div>
          <div className="col-sm-12 col-md-4 services">
            <i className="fa fa-trophy"></i>
            <h2>OUR APPROACH</h2>
            <p>
            Offering a friendly environment in which student can successfully learn basic skills and core academic content, develop his or her special talents and social competencies.
            </p>
          </div>
          <div className="col-sm-12 col-md-4 services">
            <i className="fas fa-key"></i>
            <h2>OUR MISSION</h2>
            <p>
            Inspiring students to achieve potential and personal goals through activities that are developmentally suitable, discretely paced, and personalized to each student’s academic performance and interest.
            </p>
          </div>
         
        </div>
      </div>
    );
}

export default Service;