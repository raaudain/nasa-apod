import React from "react";
import ExpandCollapse from "react-expand-collapse";
import "../css/PODCard.css";

export default function PODCard(props){

  const isCreditTrue = props.copyright ? `Credit: ${props.copyright}` : null;

  const videoIsTrue = <div className="vod">
                        <iframe
                          title={props.title}
                          src={props.url}
                          frameBorder="0"
                        />
                        <div className="vod-card"> 
                          <div key={props.date}>
                            
                            <h2>Video of the Day: {props.title}</h2>
                              
                            <ExpandCollapse 
                              previewHeight="20px"
                              expandText="show more"
                              collapseText="show less"
                            > 
                              <div className="vod-info">
                              
                                <p>{props.explanation}</p>
                                <p className="credit">{isCreditTrue}</p>
                                
                              </div>
                            </ExpandCollapse>
                            
                          </div>
                        
                        </div>
                      </div>
  
  const imageIsTrue = <div 
                        className="pod" 
                        style={{backgroundImage: `url(${props.url})`}}
                      >
                        
                        <div className="pod-card"> 
                          <div key={props.date}>
                            <h2>Picture of the Day: {props.title}</h2>
                            
                            <ExpandCollapse 
                              previewHeight="20px"
                              expandText="show more"
                              collapseText="show less"
                            >
                              <div className="pod-info">
                              
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

  const display = props.media_type === "video" ? videoIsTrue : imageIsTrue;

  return(
      <>
        {display}
      </>
  );
}

