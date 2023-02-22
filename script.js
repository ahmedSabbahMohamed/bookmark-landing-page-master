let menu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay");
let closeOverlay = document.querySelector(".close");
let header = document.querySelector(".header");

menu.addEventListener("click", _ => {
    overlay.style.display = "block";
    header.style.visibility = "hidden";
});

closeOverlay.addEventListener("click", _ => {
    overlay.style.display = "none";
    header.style.visibility = "visible";
})



let tab = document.querySelectorAll(".tabs li");
let tabContent = document.querySelectorAll(".test");

tab.forEach(ele => {
    ele.addEventListener("click", e => {
        tab.forEach(ele => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        tabContent.forEach(ele => {
            ele.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.custom).style.display = 'block';
    });
});

let allAccordion = document.querySelectorAll(".accordion");

allAccordion.forEach(ele => {
    ele.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("convert-color");
        e.currentTarget.nextElementSibling.classList.toggle("show-cont2");
    });
});

let submit = document.querySelector('[name = "submit"]');
let emailInput = document.querySelector("#email");
let inputValue = emailInput.value;
let emailRe = /^(?!-)[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
let validateInput = emailRe.test(emailInput);

submit.onsubimt = function () {
    if (validateInput === false) {
        emailInput.classList.add("false");
    }
    return true;
}


//  ==>>  (regular expression)/^(?!-)[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/