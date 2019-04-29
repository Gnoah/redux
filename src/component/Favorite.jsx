import React, { Component } from "react";

export default class Favorite extends Component{

    _toggleFavorite(e) {
        const action = { type: "TOGGLE_FAVORITE",value:e }
        this.props.dispatch(action)
    }
    _toggleNonFavorite(e) {
        const action = { type: "TOGGLE_NONFAVORITE",value:e }
        this.props.dispatch(action)
    }
    componentDidMount(){
        console.log("componentDidMount :"+this.props.favoritesFilm[0].favoris,this.props.favoritesFilm[1].favoris)
    }

    render(){
        return(
            <div>
                 {
                 (films.favoris)?(<center><span role="img" aria-label="favoris" 
                 onClick={()=>this._toggleNonFavorite(films.id)}>🖤</span></center>):
                 (<center><span role="img" aria-label="favoris" 
                 onClick={()=>this._toggleFavorite(films.id)}>♡</span></center>)
                 }
            </div>
        )
    }
}