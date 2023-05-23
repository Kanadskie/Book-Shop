export class Arrow {

    toTop() {

        let top = document.createElement('div')
        
        top.classList.add('arrow-btn')

        document.querySelector('.container').insertAdjacentElement('beforeend', top)

        window.addEventListener('scroll', () => {

            let windowHeight = window.pageYOffset

            let header = document.querySelector('.header').offsetHeight
    
            let slider = document.querySelector('.slider').offsetHeight

            if ((header + slider) < windowHeight) {

                top.classList.add('arrow-btn--active')
    
            } else {
    
                top.classList.remove('arrow-btn--active')
    
            }
        })

        top.addEventListener('click', () => {

            document.querySelector('.header').scrollIntoView(true)

            let scrollToElement = document.querySelector('.header')
            
            window.scrollTo({ top: scrollToElement, behavior: 'smooth'})

            top.classList.remove('arrow-btn--active')

        })

    }

}