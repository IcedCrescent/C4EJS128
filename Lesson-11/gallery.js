const images = [
    {
        title: "Susan Wilkinson",
        url: "https://images.unsplash.com/photo-1652739878711-d63e1a419551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }, 
    {
        title: "Daniel Eliashevskyi",
        url: "https://images.unsplash.com/photo-1652695873837-19608012939c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
        title: "Debby Hudson",
        url: "https://images.unsplash.com/photo-1652703747774-558a10faacc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    }
];

/**
 * @type {HTMLHeadingElement}
 */
const heading = document.getElementById("title");

/**
 * @type {HTMLButtonElement}
 */
const nextImageButton = document.getElementById("next-btn");
/**
 * @type {HTMLButtonElement}
 */
const previousImageButton = document.getElementById("prev-btn");

/**
 * @type {HTMLSpanElement}
 */
const countSpan = document.querySelector("span#count");

/**
 * @type {HTMLImageElement}
 */
const image = document.querySelector("img#image");

let currentImageIndex = 0;

/**
 * Show next image
 * @param {MouseEvent} ev 
 */
function nextImage(ev) {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    image.src = images[currentImageIndex].url;
    heading.innerText = images[currentImageIndex].title;
    countSpan.innerText = `Photo ${currentImageIndex + 1}/${images.length}`;
}

/**
 * Show last image
 * @param {MouseEvent} ev 
 */
function previousImage(ev) {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    image.src = images[currentImageIndex].url;
    heading.innerText = images[currentImageIndex].title;
    countSpan.innerText = `Photo ${currentImageIndex + 1}/${images.length}`;
}

nextImageButton.addEventListener("click", nextImage);
previousImageButton.addEventListener("click", previousImage);