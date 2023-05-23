import { Cards } from "./cards"
import { Slider } from "./slider"
import { Arrow } from "./arrow"
import { Menu } from "./mobile_menu"
import slides from "./slider"

import { iconArrow, iconUser, iconCart, iconSearch, iconStar, iconStarFill, iconStarHalf, imgThumbnail, slideOne, slideTwo, slideThree } from "./images";

import "../css/base/base.css"
import "../css/normalize.css"

class Main {

    init() {

        let books = new Cards('AIzaSyCIXE_nRhEppkCCfuAUS3CNKv7cLaGMOC0', 6, 6, 0, 0)

        books.defaultRequest()
        
        books.currentRequest()


        let slider = new Slider(slides, 5000, 0)

        slider.play()


        let arrow = new Arrow()

        arrow.toTop()


        let mobileMenu = new Menu()

        mobileMenu.init()

    }

}

document.addEventListener('DOMContentLoaded', () => {

    let shop = new Main()

    shop.init()

})

