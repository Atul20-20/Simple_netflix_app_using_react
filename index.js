import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import Sdata from "./Sdata";
import "./index.css";
// Save the file with name "index.js "
function netcard(val)
{
  return(

    <Card 
    imgsrc={val.imgsrc}
    title ={val.title}
    sname= {val.sname}
    link = {val.link}
  />

  );

}

ReactDOM.render(

<React.Fragment>
  <h2>List of top Webseries on netflix.</h2>
  {Sdata.map(netcard)}
</React.Fragment>

,document.getElementById("root")

);
