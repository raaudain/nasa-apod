import React from "react";
import ExpandCollapse from "react-expand-collapse";
import "../../css/PODCard.css";

export default function PODCard(props){

  const IsCreditTrue = props.copyright ? `Credit: ${props.copyright}` : null;

  return(
    <div 
      className="pod" 
      style={{backgroundImage: `url(${props.url})`}}
    >
      <div className="card"> 
        <div key={props.date}>
          <h2>Picture of the Day: {props.title}</h2>
          
          <ExpandCollapse 
            previewHeight="20px"
            expandText="show more"
            collapseText="show less"
          >
            <div className="info">
            
              <p>{props.explanation}</p>
              <a 
                href={props.hdurl}
                target="_blank"
                rel="noopener noreferrer" // Needed for solve _blank vulnerability
              >
                <img 
                  className="pod-img" src={props.hdurl} 
                  alt={`NASA Photo of the Day: ${props.title}`} 
                  title="Click to view full image"/>
              </a>
              
              <p className="credit">{IsCreditTrue}</p>
              
            </div>
          </ExpandCollapse>
          
       </div>
      
      </div>
    </div>
  );
}

