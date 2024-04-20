import '../style.css';

const sidebar = (() => {
    let sidebarNav = document.createElement('div');
    /*Place holder text for div*/
    sidebarNav.textContent = 'Sidebar';
    sidebarNav.classList.add('sidebar');

    

    return {sidebarNav};
})();

export {sidebar};

