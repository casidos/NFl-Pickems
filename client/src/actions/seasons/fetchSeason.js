export function fetchSeason(id){
  return (dispatch) => {
    dispatch({type: 'FETCHING_SEASON'})
    fetch(`/api/leagues/seasons/${id}`)
    .then(resp => resp.json())
    .then(json => {
      dispatch({type: 'SEASON_LOADED', season: json})
    });
  };
};