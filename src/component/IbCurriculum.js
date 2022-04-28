import React from 'react'
import "./IbCurriculum.css";
import {useNavigate} from "react-router-dom"
const IbCurriculum = () => {
      const navigate = useNavigate()
    const handleDemo = () => {
        navigate("/contact")
    }
  return (
    <div>
          <div className='curiculum-baner'>
              <div>
                  <h1>IB CURRICULUM</h1>
              </div>
          </div>
          <div className='container-fluid circulum-main'>
                    <div className='circulum-head'>
                      <div className='circulum-box'>
                         <div>
                              <p>IB MYP Chemistry</p>
                              <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                          </div> 
                      </div>
                      <div className='circulum-box2'>
                         <div>
                              <p>IB MYP Biology</p>
                              <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                          </div>
                      </div>
                      <div className='circulum-box'>
                         <div>
                              <p>IB MYP Physics</p>
                              <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                          </div> 
                       </div>
                      <div className='circulum-box2'>
                         <div>
                              <p>IBDP Chemistry HL</p>
                              <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                          </div>
                      </div>
                      <div className='circulum-box'>
                         <div>
                              <p>IBDP Chemistry SL</p>
                              <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                          </div> 
                      </div>
                      <div className='circulum-box2'>
                         <div>
                              <p>IBDP Biology HL</p>
                              <button className='btn btn-warning ' onClick={handleDemo}>Contact for Demo</button>
                          </div>  
                      </div>
                      <div className='circulum-box'>
                        <div>
                            <p>IBDP Biology SL</p>
                            <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                        </div>
                     </div>
              </div>
            </div>
    </div>
  )
}

export default IbCurriculum;