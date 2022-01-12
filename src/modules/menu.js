const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleMenu);

    menu.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.closest('a') || e.target.classList.contains('close-btn')){
            handleMenu();
        }
    });
};

export default menu;