const dLinks = Array.from(document.querySelectorAll(".dropdown__link"));
const dLists = document.querySelector(".dropdown__list");
const dValue = document.querySelector(".dropdown__value");


dValue.addEventListener("click", () => {
    dLists.classList.add("dropdown__list_active");
})


dLinks.forEach((element) => {

    element.addEventListener("click", function (ev) {
        dValue.textContent = element.textContent;
        dLists.classList.remove("dropdown__list_active");
        ev.preventDefault()
    })
})