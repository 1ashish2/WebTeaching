import React from 'react'
import "./IcgseProgram.css";
import {useNavigate} from "react-router-dom"
const IcgseProgram = () => {
    const navigate = useNavigate()
    const handleDemo = () => {
        navigate("/contact")
    }
  return (
    <div>
          <div className='curiculum-baner'>
              <div>
                  <h1>IGCSE PROGRAMMES</h1>
              </div>
          </div>
         
          <div className='container-fluid circulum-main'>
                    <div className='circulum-head'>
                      <div className='circulum-box'>
                         <div>
                              <p>Cambridge IGCSE – Physics</p>
                              <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                          </div> 
                      </div>
                      <div className='circulum-box2'>
                         <div>
                              <p>Cambridge IGCSE – Chemistry</p>
                              <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                          </div>
                      </div>
                      <div className='circulum-box'>
                         <div>
                              <p>Cambridge IGCSE – Biology</p>
                              <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                          </div> 
                       </div>
                      <div className='circulum-box2'>
                         <div>
                              <p>Cambridge A- LEVEL</p>
                              <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                          </div>
                      </div>
                      <div className='circulum-box'>
                         <div>
                              <p>Cambridge O- LEVEL</p>
                              <button className='btn btn-warning' onClick={handleDemo}>Contact for Demo</button>
                          </div> 
                      </div>
                     
              </div>
            </div>
    </div>
  )
}

export default IcgseProgram;