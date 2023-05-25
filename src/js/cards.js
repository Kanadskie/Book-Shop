import wrong from "./error"
import loading from "./loader"

export class Cards {

  constructor(apiKey, cardsLimit, cardsIncrease, cardsStartIndex, itemInCart) {

    this.apiKey = apiKey

    this.cardsLimit = cardsLimit

    this.cardsIncrease = cardsIncrease

    this.cardsStartIndex = cardsStartIndex
    
    this.itemInCart = itemInCart

  }

  request(url) {

    loading.init()

    fetch(url)

    .then(response => { return response.json() })

    .then(data => { 
      
      this.writeOutput(this.formatOutput(data))
    
    })

    .catch((error) => { 

      console.error(error)

      wrong.check()

    })

  }

  requestLoadMore(url) {

    loading.init()

    fetch(url)

    .then(response => { return response.json() })

    .then(data => {
      
      this.writeOutputLoadMore(this.formatOutput(data))

      loading.hide()
    
      })

    .catch((error) => { 

      console.error(error)

      wrong.check()
      
    })

  }

  defaultRequest() {

    let defaultLink = document.querySelector('[data-category="subject:Architecture"]')

    defaultLink.classList.add('link--active')

    let defaultItem= document.querySelector('.nav-category-list__item').querySelector('.link')

    let defaultSubject = defaultItem.getAttribute('data-category')

    document.querySelector('.cards').setAttribute('data-type', defaultSubject)

    let url = `https://www.googleapis.com/books/v1/volumes?q='${defaultSubject}'&key=${this.apiKey}&printType=books&startIndex=${this.cardsStartIndex}&maxResults=${this.cardsLimit}&langRestrict=en`

    this.request(url)

  }

  currentRequest() {

    let cards = document.querySelector('.cards')

    let links = document.querySelectorAll('.nav-category-list__item')

    links.forEach(item => {

      item.addEventListener('click', (e) => {

        const target = e.target

        links.forEach(item => {
          
          item.querySelector('.link').classList.remove('link--active')

        })

        this.cardsLimit = 6

        this.cardsStartIndex = 0

        target.classList.add('link--active')

        let newSubject = target.getAttribute('data-category')

        document.querySelector('.cards').setAttribute('data-type', newSubject)

        let url = `https://www.googleapis.com/books/v1/volumes?q='${newSubject}'&key=${this.apiKey}&printType=books&startIndex=${this.cardsStartIndex}&maxResults=${this.cardsLimit}&langRestrict=en`

        cards.innerHTML = ''

        this.request(url)

      })

    })

  }

  formatOutput(data) {

    let cards = ''

    data.items.forEach(function(item) {

      let thumbnail

      if (item.volumeInfo.hasOwnProperty('imageLinks')) {

        thumbnail = item.volumeInfo.imageLinks.thumbnail

      } else {

        thumbnail = './images/thumbnail.png'

      }

      let authors

      if (item.volumeInfo.hasOwnProperty('authors')) {

        if (item.volumeInfo.authors.length > 1) {

          authors = item.volumeInfo.authors.join(', ')

        } else {

          let authorsFull = item.volumeInfo.authors.join(', ')

          let maxLength = 70

          authors = authorsFull.substring(0, maxLength) + '...'

        }

      } else {

        authors = ''
        
      }

      let title

      if (item.volumeInfo.hasOwnProperty('title')) {

        let titleFull = item.volumeInfo.title

        if (titleFull.length > 45) {

          let maxLength = 45

          title = titleFull.substring(0, maxLength) + '...'

        } else {

          title = item.volumeInfo.title

        }

      } else {

        title = ''

      }

      let description

      if (item.volumeInfo.hasOwnProperty('description')) {

        let descriptionFull = item.volumeInfo.description

        let maxLength = 100

        description = descriptionFull.substring(0, maxLength) + '...'

      } else {

        description = ''

      }

      let averageRating = item.volumeInfo.averageRating

      let ratingsCount

      if (item.volumeInfo.hasOwnProperty('ratingsCount')) {

        ratingsCount = item.volumeInfo.ratingsCount

      } else {

        ratingsCount = ''

      }

      let price

      if (item.saleInfo.hasOwnProperty('retailPrice')) {

        let rate = 80

        price = (item.saleInfo.retailPrice.amount / rate).toFixed(2)

      } else {

        price = ''

      }

      let bookId = item.id

      let cardBlock = `

      <div class='cards-item' data-id='${bookId}'>

        <img class='cards-item-img' src='${thumbnail}' alt='Book Image'>

        <div class='cards-item-block'>

            <div class='cards-item-block__authors'>${authors}</div>

            <div class='cards-item-block__title'>${title}</div>

            <div class='cards-item-block__rating'>

                <div class='rating-average'>${averageRating}</div>

                <div class='rating-count'>${ratingsCount} review</div>
    
            </div>

            <div class='cards-item-block__description'>${description}</div>

            <div class='cards-item-block__price'>&#36;${price}</div>

            <button class='cards-item-block__btn'>Buy Now</button>

        </div>

      </div>`

      cards += cardBlock

    })

    return cards

  }

  writeOutput(card) {
      
    let cards = document.querySelector('.cards')
  
    cards.innerHTML = card

    this.formatBooksInformation()

    this.loadMore()

    this.addToCart()

  }

  writeOutputLoadMore(card) {
      
    let cards = document.querySelector('.cards')

    // cards.removeChild(document.querySelector('.load'))

    cards.innerHTML += card

    this.formatBooksInformation()

    this.loadMore()

    this.addToCart()

  }

  loadMore() {

    let loadBtn = document.querySelector('.btn-load')

    const increaser = () => {

      let cards = document.querySelector('.cards')
      
      cards.removeChild(document.querySelector('.load'))
    
      this.cardsStartIndex += this.cardsIncrease

      let currentSubject = document.querySelector('.cards').getAttribute('data-type')

      let url = `https://www.googleapis.com/books/v1/volumes?q='${currentSubject}'&key=${this.apiKey}&printType=books&startIndex=${this.cardsStartIndex}&maxResults=${this.cardsLimit}&langRestrict=en`

      this.requestLoadMore(url)

  }

    loadBtn.addEventListener('click', increaser)
      
  }

  addToCart() {

    let bage = document.querySelector('.bage')

    let bageText = document.querySelector('.bage-text')

    let buyBtns = document.querySelectorAll('.cards-item-block__btn')

    let booksDataInCart = []

    buyBtns.forEach(item => {

      item.addEventListener('click', (e) => {

        const target = e.target

        let currentBookItem = {

          id: target.closest('.cards-item').getAttribute('data-id')

        }

        let userIndex = booksDataInCart.findIndex((item) => item.id === currentBookItem.id)

        if (!booksDataInCart.find((item) => item.id === currentBookItem.id)) {

          bage.style.display = 'block'

          target.textContent = 'In the cart'

          this.itemInCart += 1

          localStorage.setItem('booksInCart', this.itemInCart)

          bageText.textContent = this.itemInCart

          target.classList.add('cards-item-block__btn--selected')

          booksDataInCart.push(currentBookItem)
  
          localStorage.setItem('booksDataInCart', JSON.stringify(booksDataInCart))

        } else {

          target.textContent = 'Buy now'

          this.itemInCart -= 1

          localStorage.setItem('booksInCart', this.itemInCart)

          target.classList.remove('cards-item-block__btn--selected')

          bageText.textContent = this.itemInCart

          booksDataInCart.splice(userIndex, 1)

          localStorage.setItem('booksDataInCart', JSON.stringify(booksDataInCart))

        }

        if (this.itemInCart === 0) {

          bage.style.display = 'none'
          
        }

      })

      if (localStorage.getItem('booksDataInCart') != null) {

        booksDataInCart = JSON.parse(localStorage.getItem('booksDataInCart'))

        let cardsItems = document.querySelectorAll('.cards-item')

        cardsItems.forEach(item => {

          let currentItem = item.getAttribute('data-id')

          if (booksDataInCart.find((item) => item.id === currentItem)) {

            item.querySelector('.cards-item-block__btn').textContent = 'In the cart'

            item.querySelector('.cards-item-block__btn').classList.add('cards-item-block__btn--selected')

          }

        })

      }

    })

    if (localStorage.getItem('booksInCart') != null) {

      bage.style.display = 'block'

      this.itemInCart = Number(localStorage.getItem('booksInCart'))

      bageText.textContent = this.itemInCart

      if (this.itemInCart === 0) {

        bage.style.display = 'none'
        
      }
    
    }

  }

  formatBooksInformation() {

    let authorRow = document.querySelectorAll('.cards-item-block__authors')

    authorRow.forEach(item => {

      if (item.textContent === '') {

        item.classList.add('hidden')

      }

    })

    let descriptionRow = document.querySelectorAll('.cards-item-block__description')

    descriptionRow.forEach(item => {

      if (item.textContent === '') {

        item.classList.add('hidden')

      }

    })

    let priceRow = document.querySelectorAll('.cards-item-block__price')

    priceRow.forEach(item => {

      if (item.textContent === '$' || item.textContent === '$0') {

        item.classList.add('hidden')

      }

    })

    let averageRatingRow = document.querySelectorAll('.rating-average')

    averageRatingRow.forEach((item) => {
      
      const rating = parseFloat(item.textContent)
      
      const fullStars = Math.floor(rating)

      const hasHalfStar = rating % 1 !== 0

      const emptyStars = 5 - Math.ceil(rating)

      if (fullStars) {

        item.innerHTML = ""

        for (let i = 0; i < fullStars; i++) {

          let starFill = document.createElement("img")
          
          starFill.src = "images/icons/star_fill.svg"
          
          item.appendChild(starFill)

        }

        if (hasHalfStar) {
        
          let starHalf = document.createElement("img")
          
          starHalf.src = "images/icons/star_half.svg"
          
          item.appendChild(starHalf)
        
        }

        if (emptyStars) {

          for (let i = 0; i < emptyStars; i++) { 
      
            let star = document.createElement("img")
            
            star.src = "images/icons/star.svg"
            
            item.appendChild(star)
            
          }

        }

      }

      if (item.textContent === 'undefined') {

        item.innerHTML = ""

        for (let i = 0; i < 5; i++) { 
    
          let star = document.createElement("img")
          
          star.src = "images/icons/star.svg"
          
          item.appendChild(star)
          
        }

      }

    })

    let loadBtn = `<div class='load'><button class='btn-load'>Load More</button></div>`

    let cards = document.querySelector('.cards')

    cards.insertAdjacentHTML('beforeend', loadBtn)

  }

}