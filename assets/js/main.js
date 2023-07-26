const sidebarBtn = document.querySelector('.sidebar__bnt');
const sidebarWrap = document.querySelector('.sidebar');
const listItems = document.querySelectorAll('.sidebar__nav-link');
const activeItem = document.querySelector('.sidebar__nav-link--active');

sidebarBtn.addEventListener('click',  function() {
    this.classList.toggle('sidebar__bnt-active');
    sidebarWrap.classList.toggle('sidebar-open');
})

for( let i=0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {

        for( let i=0; i < listItems.length; i++) {
            listItems[i].classList.remove("sidebar__nav-link--active");
        }

        this.classList.add("sidebar__nav-link--active");
    })
}