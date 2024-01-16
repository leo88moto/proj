"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const film = prompt('Последний фильм?', '');
const rate = prompt('Оцените в формате 8.0', '');
const film2 = prompt('Последний фильм?', '');
const rate2 = prompt('Оцените в формате 8.0', '');

personalMovieDB.movies[film] = rate;
personalMovieDB.movies[film2] = rate2;

console.log(personalMovieDB);