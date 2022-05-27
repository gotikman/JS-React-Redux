
//! Валідатор 

const checkNumInputs = (selector) => {
    const namInputs = document.querySelectorAll(selector);

    //! Валідація поля, ввід тільки цифри
    namInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

};

export default checkNumInputs;