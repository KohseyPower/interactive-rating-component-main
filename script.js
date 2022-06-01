/* Select your rating */

let ratings = document.querySelectorAll(".menue ul li button");


ratings.forEach(btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function handleRatingBtnClick(event) {
    ratings.forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    document.querySelector(".chosen-rating").textContent = 'You selected '+ document.querySelector(".selected").textContent + ' out of 5';
}

let submit = document.querySelector(".menue .submit button");
let finalRating = document.querySelector(".selected");

submit.addEventListener("click", function(e) {
    document.querySelector(".menue").style.display = "none";
    document.querySelector(".thank-you").style.display = "flex";
});