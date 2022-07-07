const menu = document.querySelector(".Container-burger-menu")

const active = () => menu.classList.toggle('active')

menu.addEventListener('click', active)