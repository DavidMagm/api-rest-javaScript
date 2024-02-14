window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

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
    console.log('#category')
}

function searchPage() {
    // getTrenddingMoviePreview()
    // getTrenddingCategoryPreview()
    console.log('#search')
}

function trendsPage() {
    // getTrenddingMoviePreview()
    // getTrenddingCategoryPreview()
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