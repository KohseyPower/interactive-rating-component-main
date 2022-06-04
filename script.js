/* Select your rating */

let ratings = document.querySelectorAll("main ul li button");


ratings.forEach(btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function handleRatingBtnClick(event) {
    ratings.forEach(btn => {
        btn.classList.remove('selected');
        event.target.classList.add('hovered');
    });
    event.target.classList.add('selected');
    event.target.classList.remove('hovered');
    document.querySelector(".chosen-rating").textContent = 'You selected ' + document.querySelector(".selected").textContent + ' out of 5';
}

let submit = document.querySelector("main .submit button");
let finalRating = document.querySelector(".selected");

submit.addEventListener("click", function(e) {
    document.querySelector("main").style.display = "none";
    document.querySelector(".thank-you").style.display = "flex";
});