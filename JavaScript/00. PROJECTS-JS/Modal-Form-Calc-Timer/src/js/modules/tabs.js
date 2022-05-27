
//! Таби з Делегуванням подій, універсальний модуль 
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;        // 'block' деф. знач, але може прийти 'inline'
        tab[i].classList.add(activeClass);
    }


    hideTabContent();
    showTabContent();

    //!Батьківський елемент що містить таби, делегуєм вміст
    header.addEventListener('click', (e) => {
        const target = e.target;
        // провіряєм на вміст потрібного селектора в клік. елементі
        // регулярка відділяє крапку від селектора для ".contains"
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    })
}

export default tabs;