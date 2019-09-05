import React from 'react';
import Expertise  from './Expertise';
import Projects from './project';

const work = () =>{
  return (

    <div className = "first">
      <div className = " work_container">

        <p className = "me">
          <span className = "red">Daniel's</span> Resume
        </p>

        <div>
          <p className = "project">
            Technical expertise
          </p>
          <Expertise />
        </div>



        <div className = "project_container">
          <Projects/>
        </div>

      </div>



    </div>


  );
}

export default work;
