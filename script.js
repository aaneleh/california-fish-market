
const observer = new IntersectionObserver( (el) => {
    el.forEach( (el) => {
        if(el.isIntersecting){
            el.target.classList.add('show')
        } else {
            el.target.classList.remove('show')
        } 
    })
})

const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach( (el) => {
    observer.observe(el)
    }
)

const sidebarIconEl = document.getElementById('header-icon')
const sidebarEl = document.getElementById('sidebar')

const toggleSidebar = () => {
    sidebarEl.classList.toggle('active')
}

sidebarIconEl.addEventListener('click', toggleSidebar)


/*
scroll animations: https://www.youtube.com/watch?v=T33NN_pPeNI
ondas: https://www.youtube.com/watch?v=lPJVi797Uy0
parallax: https://www.youtube.com/watch?v=mxHoPYFsTuk
animações svg: https://www.youtube.com/watch?v=UTHgr6NLeEw
*/