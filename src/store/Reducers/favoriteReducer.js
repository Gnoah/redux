

const initialState = {
  favoritesFilm: [
    {
      id: 1,
      image: "images/pic.jpg",
      title: "Star Wars VII",
      description: "Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…",
      favoris: false
    },
    
  ]
}

function toggleFavorite(state = initialState, action) {
  let nextState=[]
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
    for(let i = 0;i<state.favoritesFilm.length; i++){
      if(action.value === state.favoritesFilm[i].id){
        state.favoritesFilm[i].favoris = true
        console.log("etat favoris :"+state.favoritesFilm[i].favoris)
        nextState = {
          ...state,
          favoritesFilm: [state.favoritesFilm[i]]
        }
      }
    }
    return  nextState || state
    case 'TOGGLE_NONFAVORITE':
    for(let i = 0;i<state.favoritesFilm.length; i++){
      if(action.value === state.favoritesFilm[i].id){
        state.favoritesFilm[i].favoris =false
        console.log("etat nonfavoris :"+state.favoritesFilm[i].favoris)
        nextState = {
          ...state,
          favoritesFilm: [state.favoritesFilm[i]]
        }
      }
    }
    return nextState || state
    default:
      return state
  }
}

export default toggleFavorite