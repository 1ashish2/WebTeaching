import React from 'react';

function Portfolio(props) {
    const mainHeading3 = {
        height: "15rem", display: "flex", flexWrap: "wrap", backgroundColor: "white",marginTop:"5rem"
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
        <div id="portfolio" className="container-fluid" >

            <div className="row">
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
              <h2>STUDENT'S REVIEWS</h2>
            </div>
            <hr style={{ backgroundColor: "rgb(142, 240, 13)", height: "2PX" }} />
          </div>
        </div>
                <div className="col-md-12 text-center" style={{padding:"5%"}}>
                    <blockquote data-aos="flip-left">
                        <p style={{color:"rgb(56, 16, 94)"}}>Hi sir, I got 91%.Beat the school record for
                            13 years in Che HL.But my overall was 43(English SL 6) with AA in
                            EE and TOK which is very disappointing. Will send for re-evaluation.</p>
                        <footer style={{color:"grey"}}>Sauric Jain <cite title="Source Title">,US</cite></footer>
                    </blockquote>
                </div>
                <div className="col-md-6 text-center" style={{padding:"5%"}}>
                    <blockquote data-aos="flip-left">
                        <p style={{color:"rgb(56, 16, 94)"}}>Amit sir has been my mentor.my support and my guide.His humor to overcome IB strees and personal touch of always being there for me has made me excel in HL Chemistry.
                            Thankyou so much!</p>
                        <footer>Harshit Dagar <cite title="Source Title">,Singapore</cite></footer>
                    </blockquote>
                </div>
                <div className="col-md-6 text-center" style={{padding:"5%"}}>
                    <blockquote data-aos="flip-left">
                        <p style={{color:"rgb(56, 16, 94)"}}>Hey sir! Just wanted to thank you for your support and guidence throughout IB - your mentoring helped me convert a chemistry offer from Cambridge,Penn,UChicago UNIVERSITY among others in the US.Thankyou so much!</p>
                        <footer>Samarth Narang<cite title="Source Title">,US</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;