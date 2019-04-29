import films from '../Films'
import React from 'react';

const Detail = props => {
        return(
            <div className="card">
                <div className="card-header">
                    <img className="card-img-bottom" src={props.affiche} alt="capt" width="400" height="300"/>
                </div>
                <div className="card-body">
                    <p>{props.titre} </p>
                </div>
                <div className="card-footer"> 
                    <p>{props.info} </p>
                </div>
            </div>
        )
}

export default Detail;