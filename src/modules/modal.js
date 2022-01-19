import { animate } from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const modalWindow = modal.querySelector('.popup-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (screen.width > 767) {
                animate({
                    duration: 200,
                    timing(timeFraction) {
                    return timeFraction;
                    },
                    draw(progress) {
                        modalWindow.style.opacity = progress;
                    }
                });
            }
            
            modal.style.display = 'block';  

            });
        });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modalWindow.style.opacity = '';
            modal.style.display = 'none';
        }
    });
};

export default modal;