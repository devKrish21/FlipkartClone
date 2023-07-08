document.querySelector('.login-btn').addEventListener('click', function () {

    document.querySelector('.popup').classList.remove('popup-hidden');
    document.querySelector('.overlay').classList.remove('overlay-hidden');

})

document.querySelector('.cut-hidden').addEventListener('click', function () {

    document.querySelector('.popup').classList.add('popup-hidden');
    document.querySelector('.overlay').classList.add('overlay-hidden');


})

document.querySelector('.overlay').addEventListener('click', function () {

    document.querySelector('.overlay').classList.add('overlay-hidden');
    document.querySelector('.popup').classList.add('popup-hidden');



})


// slider buttons 
let sliders = document.querySelectorAll(".sliderImage")
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let sliderCount = 0;





for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.left = `${i * 100}%`
}











nextButton.addEventListener("click", function () {


    if (sliderCount < sliders.length - 1) {
        sliderCount++
        for (let i = 0; i < sliders.length; i++) {
            sliders[i].style.transform = `translateX(-${sliderCount * 100}%)`;
        }

    }
})
prevButton.addEventListener("click", function () {

    if (sliderCount > 0) {


        sliderCount--;

        for (let i = 0; i < sliders.length; i++) {
            sliders[i].style.transform = `translateX(-${sliderCount * 100}%)`;
        }
    }
})