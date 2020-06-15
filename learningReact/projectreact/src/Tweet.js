import React from 'react';
import './App.css'; 

// Props are paramenters that are passed into the component
function Tweet(props) { 
  return (
    <div className="tweet"> 
      <h3>{props.name}</h3>
      <p>{props.message}</p>
      <h3>Number of likes</h3>
    </div> 
  );
}

//You need to export components to use them and make sure to import where used 
export default Tweet; 