"use strict";

let numberOfFilms;

function start() {
    numberOfFilms =  +prompt("Сколько фильмов вы уже посмотрели?", "");

    // ! цикл виконується поки одна з умов = true
    // ! провіряєм на "Cansel", "Ok" і букви в рядку

    while (numberOfFilms == ""  || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms =  +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms () {
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
}

rememberMyFilms();


function detectPersonalLevel () {
    if ( personalMovieDB.count < 10 ) {
        console.log('Досить мало!'); 
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
            console.log('Середня к-ть');
    } else if (personalMovieDB.count >= 30) {
            console.log('Ти кіноман');
    } else {
            console.log('Відбулася помилка');
    }

}

detectPersonalLevel();

function showMyDb (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDb(personalMovieDB.privat);


function writeYourGenres () {
    for (let i = 1; i<=3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i - 1] = genre;
        // ! [i - 1] якщо записуєм в масив з 1-о місця, тобто 0
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

    }
}
writeYourGenres();