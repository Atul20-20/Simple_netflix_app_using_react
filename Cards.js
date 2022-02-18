import React from "react";

// Save the file with name "Cards.jsx "
function Cards(props){
    return(
        <React.Fragment>
            <div className='cards'>
                <div className='card'>
                    <img 
                        src={props.imgsrc} 
                        alt='mypic' 
                        className='card_img'/>
                </div>
                <div className='card_info'>
                    <span className='card_category'>{props.title}</span>
                    <h3 className='card_title'>{props.sname}</h3>
                     <a 
                      href={props.link} 
                      target='_blank'>
                      <button className="card_buttons">Watch now</button>
                     </a>
                </div>
                
            </div>
        </React.Fragment> 
    );
}
export default Cards;