const getElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element
    throw Error (
        `Hey double check fool because there is no ${selector}`
    )
}

const links = getElement('.navLinks')
const navBtnDom = getElement('.navBtn')

navBtnDom.addEventListener('click', ()=>{
    links.classList.toggle('showLinks')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
