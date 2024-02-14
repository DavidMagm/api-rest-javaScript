

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

async function getTrenddingMoviePreview() {
    const {data} = await api(`trending/movie/day?language=en-US`);
    //const data = await res.json()
    const movies = data.results;

    trendingMoviesPreviewList.innerHTML = "";
    
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
        movieImg.setAttribute('alt', movie.title);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);

    });
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

      titleCategoyList.appendChild(textTitleCategory)
      categoryContainer.appendChild(titleCategoyList)
      categoriesPreviewList.appendChild(categoryContainer)

    });
}

getTrenddingCategoryPreview()