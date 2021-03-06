import React from 'react'
import { connect } from 'react-redux'

class Design extends React.Component {

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
    componentDidUpdate() {
        console.log("componentDidUpdate : ")
        console.log(this.props)
      }
    render() {
        console.log('render'+this.props)
        
        return (

            <div className="container">
                <div className="row">
                    {
                        (this.props.favoritesFilm.length > 0) ? (this.props.favoritesFilm.map(items =>
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div key={items.id} className="card cardTete">
                                    <img src={items.image} alt="yes" />
                                    <div className="card-body">
                                        <h5 className="card-title">{items.title}</h5>
                                        {
                                            (items.favoris)?(<center><span role="img" aria-label="favoris" onClick={()=>this._toggleNonFavorite(items.id)}>🖤</span></center>):(<center><span role="img" aria-label="favoris" onClick={()=>this._toggleFavorite(items.id)}>♡</span></center>)}
                                        
                                        <p className="card-text">{items.description}</p>

                                    </div>
                                </div>
                            </div>)) : ('')
                    }


                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        favoritesFilm: state.favoritesFilm
    }
  }
export default connect(mapStateToProps)(Design)