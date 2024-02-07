// const movies = [
//     {title: 'The Dark Knight', rating: 9.0, year: 2008, director: 'Christopher Nolan'},
//     {title: 'Twilight', rating: 7.8, year: 2010, director: 'Anna Nolan'},
//     {title: 'Spider Man', rating: 8.9, year: 2013, director: 'Bob Collins'},
//     {title: 'It 2', rating: 3.4, year: 2022, director: 'Andrey Munin'}
// ]
//
// function formatMovieInfo(movie){
//     return `${movie.title} (${movie.year}), director by ${movie.director}, rating: ${movie.rating}, additional info: ${movie.additionalDetail}`
// }
//
// function getMovieDetail(movie){
//     return{
//         title: movie.title,
//         rating: movie.rating,
//         year: movie.year,
//         director: movie.director,
//         additionalDetail: 'stars: 5'
//     }
// }
//
// const recommendedMovies = movies
//     .filter((movie) => movie.rating > 8)
//     .map(getMovieDetail)
//     .sort((a, b) => b.year - a.year)
//
// recommendedMovies.forEach((movie) => {
//     console.log(formatMovieInfo(movie))
// })

const buttonsBuy = document.querySelectorAll('.button__buy');
    buttonsBuy.forEach(button => {
        button.addEventListener('click', (event) => {
        const row = event.target.parentNode.parentNode;        const confirmationText = 'Подтверждение';
        alert(`${confirmationText}\n\nКликните "Ок", чтобы завершить покупку`);
        row.classList.add('purchased');
        button.style.display = 'none';    });
});
