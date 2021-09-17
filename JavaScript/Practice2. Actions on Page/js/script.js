
'use strict';


document.addEventListener('DOMContentLoaded', () => {

        
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Ба-ба",
            "Скотт Пилигрим против..."
        ]
    };

    const rightSide = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
        

    addForm.addEventListener('submit', (evt) => {
        evt.preventDefault();                     // Обнуляєм стандартну поведінку

        let newFilm = addInput.value;            // дані з поля вводу форми Новий Фільм
        const favorite = checkbox.checked;      // перевірка галочки

        if (newFilm) {                         // перевірка на пустий рядок
            
            if (newFilm.length > 21) {         // Обрізка довжини рядка

                newFilm = `${newFilm.substring(0, 22)}...`;
                // newFilm = newFilm.slice(0, 3) + "...";                
            }

            if (favorite) {
                console.log('Добавляєм улюблений фільм');                
            }
            
            movieDB.movies.push(newFilm);      // добавляєм Новий фільм в обєкт
            sortArr(movieDB.movies);
    
            creatMovieList(movieDB.movies, movieList);
        }

      
        evt.target.reset();

    });


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    
    };

    
    const makeChanges = () => {
        genre.textContent = "драма";

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    
    const sortArr = (arr) => {
        arr.sort();
    };


    movieDB.movies.sort();

    //! добавляєм з бази фільми на сайт
    function creatMovieList (films, parent) {     // Формуєм список фільмів
        parent.innerHTML = '';                    // очищаєм вміст спочатку
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1} ${film}
                    <div class="delete"></div>
                </li>
                `;
        });


        //! Видаляєм елементи списку по кліку корзини
       document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();             // видалєм зі сторінки
                movieDB.movies.splice(i, 1);

                creatMovieList(films, parent);
            });

       });
        
    }

    deleteAdv(rightSide);
    makeChanges();
    creatMovieList(movieDB.movies, movieList);

});