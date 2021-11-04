
import { getResource } from '../services/services';

function cards() {
    //! CLASS для створення нових карточок 

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;                                //! буде масив
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changToUAH();                           // котвертуєм price з дол в грн
        }

        changToUAH() {
            this.price = this.price * this.transfer;      // міняє на льоту дол в грн  
        }

        render() {                                          //! метод добавлення new cards
            const element = document.createElement('div');   // створюю віртуальний div      

            if (this.classes.length === 0) {
                this.classes = 'menu__item';                //! перезаписую пустий масив ???
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className)); //! Добавляєм залишкові rest класи
            }

            element.innerHTML = `                         
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>                
        `;
            this.parent.append(element);
        }
    }



    //! fetch \ заливаємо карточки з сервера на сайт  
    getResource('http://localhost:3000/menu')   // запускаєм функцію з адресом наших карток
        .then(data => {
            data.forEach(({ img, altimg, title, descr, price }) => {   // реструктуризуєм обєкт картки
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

    //! AXIOS заливка карточки з сервера на сайт бібл.  
    //   axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({img, altimg, title, descr, price}) => {   // реструктуризуєм обєкт картки
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();    
    //         });
    //     });

}

// module.exports = cards;   // старий спосіб експорту
export default cards;
