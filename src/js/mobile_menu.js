export class Menu {

    init() {

        let navCategory = document.querySelector('.nav-category')

        let navCategoryList = document.querySelector('.nav-category-list')

        let switcherBody = document.querySelector('.switcher-body')

        let switcherBtn = document.querySelector('.switcher-body__btn')
    
        switcherBody.addEventListener('click', () => {

            navCategory.classList.toggle('nav-category--open')

            navCategoryList.classList.toggle('nav-category-list--open')

            switcherBody.classList.toggle('switcher-body--dark')

            switcherBtn.classList.toggle('switcher-body__btn--dark')

        })

        window.addEventListener('resize', () => {

            navCategory.classList.remove('nav-category--open')

            navCategoryList.classList.remove('nav-category-list--open')

            switcherBody.classList.remove('switcher-body--dark')

            switcherBtn.classList.remove('switcher-body__btn--dark')

        }, true)

    }
    
}