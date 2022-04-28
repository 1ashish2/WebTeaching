import React from 'react'
import Contact from './Contact'
import {Link, useParams,useNavigate} from"react-router-dom"
import "./about.css"
import { Button } from 'react-bootstrap'
 const About = () => {
   const params = useParams();
   const navigate = useNavigate()
    const handleDemo = () => {
        navigate("/contact")
    }
   const Parent = () => {
     return (
       <div className='container about-data'>
        <h1>For {params.id}<span><hr /></span></h1>

        <div >
        <p>
          Amit has provides online courses to students in the International Baccalaureate, International Baccalaureate Diploma Programme and other Science subjects for over 11 years. We believe that every child has different goals and ambitions, they have different skill sets and they come from different educational backgrounds. Their motive would be to do well in their exams regardless of whether they had proper support from their teachers and school and we help them get through to the pinnacle of success in exams. We also support in building up a thorough foundation for them in all the basic concepts of Science. Our motive is to make sure that the students and parents feel completely satisfied with Amit online tutoring experience, and the students come out with better knowledge and an improved position to continue their further studies with confidence.
        </p><h3>How we do</h3>
        <p>
          Amit offers intensive study and revision of Science concepts online, targeted at students in the International Baccalaureate (IB) Diploma Programme, IB programme and other Science subjects.
          Our courses match the teaching that students receive in their respective schools and make sure that students have a better chance of integrating knowledge, finding the power that helps them to do better in the exams, and help them fill any knowledge gaps they may have. Our goal is always to give students both a comprehensive overview of the entire core syllabus of a subject, and allow them to practice the skills that will help them excel in the different types of examination.
        </p>
         <h3>Our Approach</h3>
          <p>
          At Amit we take pride in taking a personal approach to each student and family. We want parents to be assured that their child is in the safe hands of Amit. We are always available to answer any questions before, during or after the course and will always be ready to offer our help with any academic problem you have. At Amit Education, the students are always encouraged to approach their online tutor with their queries and concerns.

          </p>
          </div>
      </div>
     )
   }
    const Student = () => {
     return (
       <div className='container about-data'>
        <h1>For {params.id}<span><hr /></span></h1>

        <div >
        <p>
         There are many benefits of online tutoring for the students and Amit offers the best online tutoring possible. There are many advantages of online tuitions for a learner. Students can sit at the comfort of their home and enjoy the learning process instead of having the pain of travelling all the way to school and sit in a classroom all day long. Another advantage is that the students can practice their Science skills without getting distracted or disturbed from the fellow students. The familiar home atmosphere helps them more relaxed and comfortable to 
           </p>
        <p>
         As the tutor provides regular feedback on each unit completed the child gets encouraged to keep learning on their own schedules. The online tutoring at Amit helps build confidence beyond Science proficiency. Using a system focused on concept mastery we teach students how to study, learn and think critically in one place. Our online curriculum teaches Science problems, which help with critical thinking, analytical processes, problem-solving and reasoning skills. This problem solving skills help the students in solving other life problems as well not to give till they solve them.
           </p>
       
          <p>
         We shape lifelong learners by attaching problems to real-life situations which allows our students to get massively better at developing thinking abilities and problem solving skills. Our tutor gives customized classes based on the students’ requirements and hence they feel comfortable learning online rather than in a class full of pupil who may distract or demoralize them.
          </p>
          </div>
      </div>
     )
   }
  return(
    <div>
      
      <div className='about-baner'>
        <div>
         <h1>About {params.id}</h1>
      </div>
      </div>
      {params.id == "Parents" ?
        <Parent /> : <Student />
      }
      <div className='container-fluid about-contact'>
        <div className='row'>
          <div className='col-sm-12 col-md-5 about-col1'>
            <div className='container about-join'>
                <h1>Join Now</h1>
          </div>
        
        </div>
          <div className='col-sm-12 col-md-7 about-col2'>
            <div className='container about-demo'>
              <h3>Interested To Attend Free Demo?</h3>
              <Button className='btn-primary' onClick={handleDemo}>Contact Now</Button>
              </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default About;
