// Query DOM

// Get the first element with id "title"
/**
 * @type {HTMLHeadingElement}
 */
const h1 = document.getElementById("title");

// Get all elements with class "red"
const redElements = document.getElementsByClassName("red");

// Get all paragraph elements
const paragraphs = document.getElementsByTagName("p");

const firstParagraph = document.querySelector("p");

const firstElementWithRed = document.querySelector(".red");

/**
 * @type {HTMLHeadingElement}
 */
const firstElementWithIdTitle = document.querySelector("#title");

const allParagraphs = document.querySelectorAll("p");

const allElementsWithRed = document.querySelectorAll(".red");

const allElementWithIdTitle = document.querySelectorAll("#title");

/**
 * @type {HTMLInputElement}
 */
const inputName = document.getElementById("name-input");
/**
 * @type {HTMLInputElement}
 */
const inputBirthday = document.querySelector("input#birthday-input");
/**
 * @type {HTMLButtonElement}
 */
const submitButton = document.querySelector("#submit-btn");

/**
 * @type {HTMLImageElement}
 */
const memeImg = document.querySelector("#meme-img");

/**
 * Do something when clicked
 * @param {PointerEvent} ev onclick event
 */
function submit(ev) {
    console.log(ev.target.innerText);
    alert("You clicked submit");
}

submitButton.addEventListener("click", submit);

const changeImgButton = document.getElementById("change-img-btn");


changeImgButton.addEventListener("click", function(ev) {
    // Anonymous function
    memeImg.src = "https://i1.sndcdn.com/artworks-6vjkU2fWoGjyNCCs-toATmQ-t500x500.jpg";
});
