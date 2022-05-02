import React from 'react';

function Feature(props) {
    const fontStyle = {
        fontSize: "80px", color: "rgb(56, 16, 94)"
      }
    return (
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
            <h2>GCSE COURSES</h2>
            <p>Provide online training through Skype
              sessions and interactive white board
              facility.</p>
            <p><a className="btn btn-default" href="#" role="button">Contact For Demo &raquo;</a></p>
          </div>

        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">PYP, MYP, DP Programmes. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">PYP Key Findings - This resource provides an overview of key findings from recent studies relating to the PYP, including PYP's impact on school climate, and student well-being in PYP schools.</p>
            <p className="lead">MYP Key Findings - The findings below come from IB-commissioned research relating to the MYP. Studies highlight a number of outcomes, including: the skills fostered through the MYP, non-scholastic outcomes of the programme and the academic achievement of MYP students.</p>
            <button className='btn btn-outline-primary'>Find more </button>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-responsive center-block" src="https://gdgws.gdgoenka.com/wp-content/uploads/2019/01/ibprograme.png" alt="Generic placeholder image" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 col-md-push-5">
            <h2 className="featurette-heading">We offer a wide range of <span className="text-muted">IGCSE courses.</span></h2>
            <p className="lead">The IGCSE is the world’s most popular exam qualification for 14 to 16 year olds, and the Cambridge IGCSE is recognised by universities and employers everywhere.</p>
            <p className="lead">Your child’s choice of IGCSE subjects can have a major bearing on their future education and career.</p>
            <p className="lead">As we offer a number of IGCSE Science options, you can find out more</p>
            <button className='btn btn-outline-primary'>Find more </button>
          </div>
          <div className="col-md-5 col-md-pull-7">
            <img className="featurette-image img-responsive center-block" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/asia-student-group-in-university-work-hard-togather-for-make-a-r-anek-suwannaphoom.jpg" alt="Generic placeholder image" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">We offer a wide range of <span className="text-muted">GCSE courses.</span></h2>
            <p className="lead">The General Certificate of Secondary Education (GCSE) is the UK’s most widely recognised certification for the end of secondary school education. It is often the entry-level requirement to further study, such as A Levels and apprenticeships.</p>
            <p className="lead">GCSEs are recognised qualifications that are often a gateway to further learning. GCSEs are one of the most popular and sought-after level 2 qualifications in the UK. Core subjects consist of Science.</p>
            <button className='btn btn-outline-primary'>Find more </button>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-responsive center-block" src="https://www.ibyb.org/images/uploads/3a2b9ac2f94c83aeb2f8121bb9b1ef43.jpg" alt="Generic placeholder image" />
          </div>
        </div>
      </div>
    );
}

export default Feature;