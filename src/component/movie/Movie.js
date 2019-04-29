import React from 'react';

const Movie = props => {

    return(
    <div className="movie">        
        
         <div className="card">
                <div className="card-header">
                    <img className="card-img-bottom" src={props.poster} alt="capt" width="400" height="300"/>
                </div>
                <div className="card-body">
                    <p>{props.titre} </p>
                </div>
                <div className="card-footer"> 
                    <p>{props.info} </p>
                </div>
            </div>
            <hr/>
    </div>
); 
}


export default Movie;
