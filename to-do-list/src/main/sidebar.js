import '../style.css';

const sidebar = () => {
    let sidebarNav = document.createElement('div');

    sidebarNav.textContent = 'Sidebar';
    
    sidebarNav.classList.add('sidebar');
    return sidebarNav;
}

export {sidebar};

