const mainNav = document.getElementById('main-nav')
const navToggle = document.querySelector('.nav-toggle')
const faBars = document.querySelector('.fa-bars')

navToggle.addEventListener('click', function () {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true'
    navToggle.setAttribute('aria-expanded', !isExpanded)
    mainNav.classList.toggle('nav-open')
    

    if (isExpanded) {
        faBars.classList.replace('fa-times', 'fa-bars')
    } else {
        faBars.classList.replace('fa-bars', 'fa-times')
    }

})