import React, {Component} from 'react';
import {films} from '../films/films';
import Movie from './movie/Movie';


export default class Mitady extends Component{
    constructor(props) {
        super(props);
       
      }
      
    
     
    filterIt = (films, searchTerm) => {
        return films.titre.includes(searchTerm)
    } 
    
     
    render(){
        return(
            <form>
                <input
                    placeholder="Search for..."
                    onChange={(event)=>this.props(event.target.value)}
                />
                {

                films.map((film,index) =>(
                <Movie 
                    key={index}
                    titre={film.titre}
                    poster={film.poster}
                    info={film.info}
                />
                ))
                }
            </form>
            
        )
    }
}