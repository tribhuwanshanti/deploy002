const popup = document.querySelector('.popup');
        const x = document.querySelector('.popup p')
        const popuppart = document.querySelector('.popup-content')

        window.addEventListener('load', () => {
            popup.classList.add('showPopup');
            popup.childNodes[1].classList.add('showPopup');
        })
        x.addEventListener('click', () => {
            popup.classList.remove('showPopup');
            popup.childNodes[1].classList.remove('showPopup');
        })
        popuppart.addEventListener('click', () => {
            window.location.href="https://forms.gle/x2iYb2PfuPuY367J7"
        })