const auth = "563492ad6f91700001000001b75b3f9ab4664bd7b5b752c4f00a8179 "
const animal = document.querySelector('.animal');
let flag = false;

async function getContent(type, value) {

    const promise = await fetch(
        `https://api.pexels.com/v1/search?query=${type}&per_page=${1}&page=${value}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,

            },
        }
    );

    const object = await promise.json();
    animal.src = object.photos[0].src.medium;
}

function buttonClick(type) {
    if (!flag) {
        animal.setAttribute("border", "2px solid");
        flag = true;
    }
    const randomNum = parseInt(getRandomNumber(1, 80));
    animal.src = getContent(type, randomNum)

}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function init() {
    document.querySelector(".header-buttons").addEventListener("click", function (event) {
        buttonClick(event.target.innerText);
    });

}


init();
