import React from "react";
import "../programs/Programs.css";
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const programs = () => {
  return (
    <div className="Programs" id="programs">
 

      <div className="program-categories">
        {programsData.map((program)=>(
            <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                    <img src={RightArrow} alt="" />
                </div>
            </div>

        ))}
      </div>



    </div>
  );
};

export default programs;
