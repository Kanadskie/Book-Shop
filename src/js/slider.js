export class Slider {

  constructor(slides, changeTime, intervalId) {
    this.slides = slides
    this.changeTime = changeTime
    this.intervalId = intervalId
  }

  initSlider() {

    if (!this.slides || !this.slides.length) return

  }

  initImages() {

    let sliderImages = document.querySelector('.slider-images')

    this.slides.forEach((item, index) => {

      item = `<img class='slider-images__item n${index} ${index === 0? 'active-image' : ''}' src="${this.slides[index].url}" data-index='${index}'></div>`
      
      sliderImages.innerHTML += item

    })

  }

  initDots() {

    let sliderDots = document.querySelector('.slider-dots')

    this.slides.forEach((item, index) => {

      item = `<div class='slider-dots__item n${index} ${index === 0? 'active-dot' : ''}' data-index='${index}'></div>`
  
      sliderDots.innerHTML += item
  
    })
  
    sliderDots.querySelectorAll('.slider-dots__item').forEach(dot => {
  
      dot.addEventListener('click', () => {

        this.moveSlider(dot.dataset.index)

        this.initAutoPlay()

      })
      
    })

  }

  initAutoPlay() {

    let sliderImages = document.querySelector('.slider-images')

    clearInterval(this.intervalId)

    this.intervalId = setInterval(() => {
  
      let curNumber = +sliderImages.querySelector('.active-image').dataset.index
  
      let nextNumber = curNumber === this.slides.length - 1? 0 : curNumber + 1
  
      this.moveSlider(nextNumber)
  
    }, this.changeTime)

  }

  moveSlider(num) {

    let sliderImages = document.querySelector('.slider-images')

    sliderImages.querySelector('.active-image').classList.remove('active-image')
    
    sliderImages.querySelector('.n' + num).classList.add('active-image')

    let sliderDots = document.querySelector('.slider-dots')
  
    sliderDots.querySelector('.active-dot').classList.remove('active-dot')
  
    sliderDots.querySelector('.n' + num).classList.add('active-dot')
  
  }


  play() {

    this.initSlider()

    this.initImages()

    this.initDots()
    
    this.initAutoPlay()
    
  }

}

let slides = [

  { url: 'images/slide_1.jpg' },
  { url: 'images/slide_2.jpg' },
  { url: 'images/slide_3.jpg' }

]

export default slides
