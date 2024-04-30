import '../style.css';

const sidebar = (() => {
    const sidebarNav = document.createElement('div');
    sidebarNav.classList.add('sidebar');

    // const addTaskBtn = document.createElement('button');
    // addTaskBtn.addEventListener('click');

    return {sidebarNav};
})();

export {sidebar};

