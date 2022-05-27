import calcWidthScroll from './calcWidthScroll';               //* ширина скролу  

const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img'),
        scroll = calcWidthScroll();                            //* ширина скролу

    imgPopup.classList.add('popup');
    imgPopup.appendChild(bigImage);
    workSection.appendChild(imgPopup);

    //!CSS Style 
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    bigImage.style.overflow = 'auto';

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        //! відкриваєм якщо клік по картинці, делегування
        if (target && target.classList.contains('preview')) {     // перевіряєм клік по картинці    
            const path = target.parentNode.getAttribute('href');  // шлях до великої картинки
            imgPopup.style.display = 'flex';
            bigImage.setAttribute('src', path);

            document.body.style.overflow = "hidden";

            document.body.style.marginRight = `${scroll}px`;     //* ширина скролу +
        }

        //! закриваєм по кліку за межі картинки
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";

            document.body.style.marginRight = `0px`;            //* ширина скролу -
        }

    });

};

export default images;