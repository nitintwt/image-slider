const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1  /*It determines the direction of the carousel movement based
     on the button's data-carousel-button attribute. If the button's data-carousel-button is "next,"
      the offset is set to 1, indicating forward movement. Otherwise, the offset is set to -1, representing backward movement*/
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")  /* It finds the closest parent element with the attribute data-carousel and 
      selects its child element with the attribute data-slides. This is where the individual slides of the carousel are located */

    const activeSlide = slides.querySelector("[data-active]") /* It finds the currently active slide within the data-slides container.
     The active slide is identified using the attribute data-active*/
    let newIndex = [...slides.children].indexOf(activeSlide) + offset  /* It calculates the index of the next slide based on the direction and 
    the currently active slide. It adds the offset*/
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0   /* The code ensures that the newIndex is always within the valid range of available 
    slides by cycling back to the last slide if the index goes below 0 and moving back to the first slide if it goes beyond the last slide index.*/

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})