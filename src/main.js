const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-type' : 'application/json/charset-utf-8'
    }
    params: {
        api_key: ApiRest;
    }
})

const ApiRest = "c7a5e1bfb3f8294b780635a2254aa9f2";
const Url = "https://api.themoviedb.org/3/";

const trenddingPreviewList = document.querySelector('.trenddingPreview-movie-list');
const categoriesContainer = document.querySelector('categories-container');

async function getTrenddingMoviePreview() {
    const {data} = await api(`trenddig/movie/day`);
    const movies = data.results;

    movies.array.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
        movieImg.setAttribute('alt', movie.title);

        movieContainer.appendChild(movieImg);
        trenddingPreviewList.appendChild(movieContainer);

    });
}

getTrenddingMoviePreview()

async function getTrenddingCategoryPreview() {
    const {data} = await fetch(`trenddig/genre/movie/list`);
    const categories = data.results;

    categories.array.forEach(category => {
        const categoriesList = document.createElement('ul');
        categoriesList.classList.add('categories-list');
        const categoryName = document.createElement('li');
        categoryName.classList.add('category-list-name');
        categoryName.textContent(`${category.name}`)

        categoriesList.appendChild(categoryName);
        categoriesContainer.appendChild(categoriesList);

    });
}

getTrenddingCategoryPreview()