document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdownButton]")
})

let currentDropdown
if (isDropdownButton) {
    currentDropdown = e.target.closet('[data-dropdown]')
    currentDropdown.classList.toggle('active')
}

document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')
})