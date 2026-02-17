const navbar = () => {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const logo = document.createElement('div');
    logo.classList.add('navbar-logo');
    logo.textContent = 'My Website';

    const menuToggle = document.createElement('button');
    menuToggle.classList.add('navbar-toggle');
    menuToggle.textContent = 'Menu';
    
    const menu = document.createElement('ul');
    menu.classList.add('navbar-menu');

    const menuItems = ['Home', 'About', 'Services', 'Contact'];
    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('navbar-item');
        menuItem.textContent = item;
        menu.appendChild(menuItem);
    });

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    nav.appendChild(logo);
    nav.appendChild(menuToggle);
    nav.appendChild(menu);

    return nav;
};

export default navbar;