import React, { Component } from 'react';
import {films} from './films/films';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
//import Favorite from './component/Favorite'
//import Recherche from './component/Recherche'
//import Movie from './component/movie/Movie';

// import Design from './component/Design'
// import { Provider } from 'react-redux'
// import Store from './store/configureStore'

import './App.css';

class App extends Component {

  state = {
    search : ""
  }

renderFilms = film =>{

  const {search} = this.state;
  var titre = film.titre.toLowerCase()

  if( search !== "" && titre.indexOf(search)=== -1){
    return null
  }
  return(
    <div className="movie">        
        
         <div className="row" onClick={()=>{
                confirmAlert({
                  customUI: ({ onClose }) => {
                    return (
                      <div id="bt" className='custom-ui'>
                         <button className="btn btn-secondary btn-sm" id="retour" onClick={onClose}>Rerchercher</button>
                        <div>
                           <div id="ground">
                           <div className="card">
                              <div className="card-header">
                                  <img className="card-img-bottom" src={film.affiche} alt="capt" height="300"/>
                              </div>
                              <div className="card-body">
                                  <p>{film.titre} </p>
                              </div>
                              <div className="card-footer"> 
                                  <p>{film.info} </p>
                                  <button id="fav" onClick={()=>film.favori="true"}>{
                                    film.favori?"♥":"♡"
                                    } 
                                  </button>
                              </div>
                          </div>
                              
                          </div>
                            
                        </div>
                      </div>
                    );
                  }
                });
               
            }}>
                <div className="col-md-4">
                    <img className="card-img-bottom" src={film.poster} alt="capt" width="400" height="300"/>
                </div>
                <div className="col-md-8">
                    <p>{film.titre} </p>
                    <p>{film.info} </p>
                </div>
            </div>
            <hr/>
    </div>
);
}

onchange = e => {
  this.setState({search: e.target.value});
}

  render() {
    return (

      //console.log(films)
      <div className="container">         
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <input className="searchin" placeholder="Titre film..." onChange={this.onchange} />
              {
                films.map(film =>{
                  return this.renderFilms(film)
                })
                
                // films.map((film,index) =>(
                //   <Movie 
                //     key={index}
                //     titre={film.titre}
                //     poster={film.poster}
                //     info={film.info}
                //   />
                // ))
              }
          </div>
          <div className="col-md-1"></div>
        </div>        
            {/* <div>
              <Provider store={Store}>
                <Design />
              </Provider>
            </div> */}
      </div>
      
        
    );
  }
}

export default App;