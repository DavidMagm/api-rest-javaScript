window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
arrowBtn.addEventListener('click', () => {
    location.hash = window.history.back()
  });
searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value;
})  
trendingBtn.addEventListener('click', () => {
    location.hash = '#trends'
})
function navigator() {
    if (location.hash.startsWith('#trends')) {
        trendsPage()
    } else if(location.hash.startsWith('#search=')) {
        searchPage()
    } else if(location.hash.startsWith('#movie=')) {
        movieDetailPage()
    } else if(location.hash.startsWith('#category=')) {
        categoriesPage()
    } else {
        homePage()
    }

    document.documentElement.scrollTop = 0;
}

function homePage() {
    getTrenddingMoviePreview()
    getTrenddingCategoryPreview()
    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive')
    trendingPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    console.log('#home')
}

function categoriesPage() {
    // getTrenddingMoviePreview()
    // getTrenddingCategoryPreview()
    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive')
    trendingPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')

    const [_,categoryInfo] = location.hash.split('=');
    const [categoryId,categoryName] = categoryInfo.split('-');
    headerCategoryTitle.innerHTML = decodeURI(categoryName);

    getMovieByCategory(categoryId)
    console.log('#category')
}

function searchPage() {
    // getTrenddingMoviePreview()
    // getTrenddingCategoryPreview()
    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive')
    trendingPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')

    const [_,query] = location.hash.split('=');
    getMovieBySearch(query)
    console.log('#search')
}

function trendsPage() {
    // getTrenddingMoviePreview()
    // getTrenddingCategoryPreview()
    headerSection.classList.remove('header-container--long')
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive')
    trendingPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')

    headerCategoryTitle.innerHTML = 'Tendencias';

    getTrenddingMovie()
    console.log('#trends')
}

function movieDetailPage() {
    // getTrenddingMoviePreview()
    // getTrenddingCategoryPreview()

    headerSection.classList.add('header-container--long')
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow-white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive')
    trendingPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive')
    categoriesPreviewSection.classList.add('inactive')
    console.log('#movie')
}