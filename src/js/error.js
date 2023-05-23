export class Error {

    check() {

        document.querySelector('.main').style.display = 'none'

        let div = document.createElement('div')

        div.classList.add('error')

        document.querySelector('.container').insertAdjacentElement('beforeend', div)

        div.innerHTML = `<span class="purple">Ooops ... </span>something went wrong, check your internet connection and try again &#128556`

    }

}

let wrong = new Error()

export default wrong
