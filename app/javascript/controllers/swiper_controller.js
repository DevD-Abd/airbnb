import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // Wait for Swiper to be available globally (loaded via CDN)
    if (typeof Swiper !== 'undefined') {
      this.initializeSwiper()
    } else {
      // If Swiper is not yet loaded, wait a bit and try again
      setTimeout(() => {
        this.initializeSwiper()
      }, 100)
    }
  }

  initializeSwiper() {
    this.swiper = new Swiper(this.element, {
      // Optional parameters
      loop: true,
      grabCursor: true,
      
      // Navigation arrows
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    })
  }

  disconnect() {
    if (this.swiper) {
      this.swiper.destroy(true, true)
    }
  }
}
