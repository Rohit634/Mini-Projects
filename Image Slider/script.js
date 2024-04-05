var currentSlideIndex = 0;
var totalSlides = 3; // Change this to match the total number of images

function showSlide(index) {
    var slider = document.getElementById('slider');
    slider.src = 'image' + (index + 1) + '.jpg'; // Change the image file names accordingly
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
}
