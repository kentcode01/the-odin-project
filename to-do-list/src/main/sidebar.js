import '../style.css';

const sidebar = (() => {
    const sidebarNav = document.createElement('div');
    sidebarNav.classList.add('sidebar');
    return {sidebarNav};
})();

export {sidebar};

