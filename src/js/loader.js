export class Loader {

    init() {

        let cards = document.querySelector('.cards')

        let loader = `<div class="loader"><div></div><div></div><div></div><div></div></div>`
    
        cards.insertAdjacentHTML('beforeend', loader)

    }

    hide() {

        let cards = document.querySelector('.cards')

        cards.removeChild(document.querySelector('.loader'))

    }

}

let loading = new Loader()

export default loading