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