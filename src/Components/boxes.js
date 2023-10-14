import React from 'react'
export default function Boxes() 
{
  const boxStyle = {
    height: '200px',      
    width: '98%',         
    border: '2px solid #000',
    padding: '10px',      
    boxSizing: 'border-box', 
    margin: '2vh'
  };

  return (
    <span>
    <div style={boxStyle} className="container-fluid">
      <b>Doctor's appointment</b>
    </div>
    
    <div style={boxStyle} className="container-fluid">
    <b>Let's Connect </b>
  </div>
  <div style={boxStyle} className="container-fluid">
  <b>Benefits of greenies</b>
  </div>
  <div style={boxStyle} className="container-fluid">
  <b>Ambulances and Hospitals</b>
  </div>
  </span>
  );
}


