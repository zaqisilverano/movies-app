import { jsonmockAPI } from './config'

type filterInterface = {
  Title: string;
  page: number;
}


export const getMoviesAPI = (filters: filterInterface) => {
  return new Promise((resolve, reject) => {
    jsonmockAPI.get("/movies/search", { params: filters })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(e => reject(e));
  });
};