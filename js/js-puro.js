const myobserver = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.section-4')
elements.forEach((element) => myobserver.observe(element))