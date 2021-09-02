"use strict";

const numberOfFilms =  +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    
    const a = prompt("Один из последних просмотренных фильмов?",''),
          b = prompt("Oцінка:?",'');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {    
        personalMovieDB.movies[a] = b; 
        console.log('Готово');
    }

    else {
        console.log('error');
        i--;
    }
}
                
if ( personalMovieDB.count < 10 ) {
    console.log('Досить мало!'); 
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('Середня к-ть');
    } else if (personalMovieDB.count >= 30) {
        console.log('Ти кіноман');
    } else {
        console.log('Відбулася помилка');
    }


console.log(personalMovieDB);



