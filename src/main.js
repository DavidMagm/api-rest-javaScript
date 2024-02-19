

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2E1ZTFiZmIzZjgyOTRiNzgwNjM1YTIyNTRhYTlmMiIsInN1YiI6IjY1NjI0YTdhZWQ5NmJjMDExZTIyNTQ4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTVv-CmrPbrNuzoDFn1mgQL-2gzewJV2nR6uFPyRzwU'

const URL = 'https://api.themoviedb.org/3/'

const options = 
     {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: API_KEY
        }
      }


const api = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: API_KEY
  }
})



//const trenddingPreviewList = document.querySelector('#trendingPreview .trendingPreview-movieList');
//const categoriesListContainer = document.querySelector('.categoriesPreview-list');


function createMovies(movies, container) {
  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
    movieImg.setAttribute('alt', movie.title);

    movieContainer.appendChild(movieImg);
    container.appendChild(movieContainer);

});
}

async function getTrenddingMoviePreview() {
    const {data} = await api(`trending/movie/day?language=en-US`);
    //const data = await res.json()
    const movies = data.results;

    trendingMoviesPreviewList.innerHTML = "";
    createMovies(movies, trendingMoviesPreviewList);
}

async function getTrenddingMovie() {
  const {data} = await api(`trending/movie/day?language=en-US`);
  //const data = await res.json()
  const movies = data.results;

  genericSection.innerHTML = "";
  createMovies(movies, genericSection);
}

// 

async function getMovieByCategory(id) {
  const {data} = await api(`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`);
  //const data = await res.json()
  const movies = data.results;

  genericSection.innerHTML = "";
  createMovies(movies, genericSection)
}

async function getMovieBySearch(query) {
  const {data} = await api(`search/movie?query=${query}&include_adult=true&language=en-US`);
  const movies = data.results;

  genericSection.innerHTML = "";
  createMovies(movies, genericSection)
}


getTrenddingMoviePreview()

async function getTrenddingCategoryPreview() {
    const {data} = await api(`genre/movie/list?language=en`);
    //const data = await res.json()

    const categories = data.genres;
    categoriesPreviewList.innerHTML = "";

    categories.forEach(category => {
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');
      const titleCategoyList = document.createElement('h3');
      titleCategoyList.classList.add('category-title')
      titleCategoyList.setAttribute('id', 'id' + category.id)
      const textTitleCategory = document.createTextNode(category.name)

      titleCategoyList.addEventListener('click', () => {
        location.hash = `#category=${category.id}-${category.name}`
      });

      titleCategoyList.appendChild(textTitleCategory)
      categoryContainer.appendChild(titleCategoyList)
      categoriesPreviewList.appendChild(categoryContainer)

    });
}

getTrenddingCategoryPreview()