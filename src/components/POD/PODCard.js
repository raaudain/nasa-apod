import React from "react";
import ExpandCollapse from "react-expand-collapse";
import "../../css/PODCard.css";

export default function PODCard(props){

  const isCreditTrue = props.copyright ? `Credit: ${props.copyright}` : null;
  console.log(props)
  let isVidTrueTitle;
  let isVidTrue;

  
  if(props.media_type === "video"){
    isVidTrueTitle = `Video of the Day: ${props.title}`;
  }
  else{
    isVidTrueTitle = `Picture of the Day: ${props.title}`;
  }

  return(
    
      <div 
        className="pod" 
        style={{backgroundImage: `url(${props.url})`}}
      >
        
        <div className="card"> 
          <div key={props.date}>
            <h2>{isVidTrueTitle}</h2>
            
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
                  rel="noopener noreferrer" // Needed to solve _blank vulnerability
                >
                  <img 
                    className="pod-img" src={props.hdurl} 
                    alt={`NASA Photo of the Day: ${props.title}`} 
                    title="Click to view full image"/>
                </a>
                
                <p className="credit">{isCreditTrue}</p>
                
              </div>
            </ExpandCollapse>
            
         </div>
        
        </div>
      </div>

  );
}

