
const timer = (id, deadline) => {

    //добавляєм нолік якщо число <10
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    const getTimeRemaining = (endtime) => {        //! fn отримує дані часу
        // t = різниця в мс. між тепершнім і дедлайном
        const t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (selector, endtime) => {       //! fn міняє час на сторінці
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        //запускаєм одразу, тому що затримка 1 сек інтервалом
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            // обнуляєм лічильник якщо вийшов час
            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval)
            }
        }
    };

    setClock(id, deadline);
};

export default timer;