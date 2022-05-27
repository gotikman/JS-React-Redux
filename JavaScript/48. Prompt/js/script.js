"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count =  +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        // ! цикл виконується поки одна з умов = true
        // ! провіряєм на "Cansel", "Ok" і букви в рядку
    
        while (personalMovieDB.count == ""  || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count =  +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if ( personalMovieDB.count < 10 ) {
            console.log('Досить мало!'); 
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
                console.log('Середня к-ть');
        } else if (personalMovieDB.count >= 30) {
                console.log('Ти кіноман');
        } else {
                console.log('Відбулася помилка');
        }    
    },
    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDb: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    // writeYourGenres: function() {
    //     for (let i = 1; i<=3; i++) {
    //        let genre = prompt(`Ваш любимый жанр под номером ${i}`);

    //         if (genre === '' || genre == null) {
    //             console.log('Ви ввели не коректіні дані або не ввели взагалі');
    //             i--;
    //         } else {
    //             // ! [i - 1] якщо записуєм в масив з 1-о місця, тобто 0
    //             personalMovieDB.genres[i - 1] = genre;
    //         }            
    
    //     }
    //     personalMovieDB.genres.forEach((item, i) => {
    //             console.log(`Любимый жанр ${i + 1} - это ${item}` );
    //     });
    // }
    

    //!  Альтернативний спосіб зі Split і Sort+toLowerCase   

    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
        
            let genres = prompt(`Введіть ваші улюблені жанри через кому ","`).toLowerCase();     

            if (genres === '' || genres == null) {
                console.log('Ви ввели не коректіні дані або не ввели взагалі');
                        i--;
             } else {                        
                 personalMovieDB.genres = genres.split(', ');
                 personalMovieDB.genres.sort();
             }     
        }
        personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}` );
        });
    }
};

 