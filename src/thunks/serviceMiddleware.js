

// export function itemsFetchData(url) {
//     return (dispatch) => {
//         dispatch(itemsIsLoading(true));
//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(itemsFetchDataSuccess(items)))
//             .catch(() => dispatch(itemsHasErrored(true)));
//     };
// }

import { API_SEARCH } from 'paths';

import {
  tvShowsFetching,
  tvShowFetchSuccess,
  tvShowFetchFailure,
} from 'actions/serviceAction';

export function fetchTvShows(key = 'batmanShowList', filterValue = {}, url = API_SEARCH, callback = () => {}) {

  const newUrl = url + setQuery(filterValue);
  return (dispatch) => {
    dispatch(tvShowsFetching());
    fetch(newUrl) // options'a gerek yok
      .then((response) => {
        if (!response.ok) { throw Error(response.statusText); }
        else { return response; }
      })
      .then(response => response.json()) // responsu parse ediyor
      .then((item) => {
        callback(item);
        return dispatch(tvShowFetchSuccess(key, item))
      })
      .catch((error) => dispatch(tvShowFetchFailure(error)));
  };
}


function setQuery(filterValues) {
  let tamp = '';
  Object.keys(filterValues).forEach((key) => {
    tamp += (key +'='+ filterValues[key]);
  });
  return tamp;
}
// burada gelen bütün parameteleri path query olarak ekleten bir sey yzmak gerek
// hadi bakalım
