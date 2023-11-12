const currentBook = document.querySelector(".book");

const controlFontSize = document.querySelector(".book__control_font-size");
const fontSizeList = controlFontSize.querySelectorAll(".font-size");

const colorBackground = document.querySelector(".book__control_background");
const backColorList = colorBackground.querySelectorAll("a");

const controlColorSize = document.querySelector(".book__control_color");
const fontColorList = controlColorSize.querySelectorAll("a");


fontSizeList.forEach((option) => {
    option.addEventListener("click", (event) => {
        currentBook.classList.remove(`book_fs-${controlFontSize.querySelector(".font-size_active").dataset.size}`)
        controlFontSize.querySelector(".font-size_active").classList.remove("font-size_active")        

        option.classList.add("font-size_active")
        if (option.classList.contains("font-size_small")){
            currentBook.classList.add(`book_fs-${option.dataset.size}`)
        } else if (option.classList.contains("font-size_big")){
            currentBook.classList.add(`book_fs-${option.dataset.size}`)
        } else {
            currentBook.classList.remove("book_fs-big")
            currentBook.classList.remove("book_fs-small")
        }

        event.preventDefault();
})
})

backColorList.forEach((option) => {
    option.addEventListener("click", (event) => {
        currentBook.classList.remove(`book_bg-${colorBackground.querySelector(".color_active").dataset.bgColor}`)
        colorBackground.querySelector(".color_active").classList.remove("color_active")
        
        option.classList.add("color_active")

        if (option.classList.contains("text_color_black")){
            currentBook.classList.add(`book_bg-${option.dataset.bgColor}`)
        } else if (option.classList.contains("text_color_gray")){
            currentBook.classList.add(`book_bg-${option.dataset.bgColor}`)
        } else {
            currentBook.classList.add(`book_bg-${option.dataset.bgColor}`)
        }

        event.preventDefault();
    })
})

fontColorList.forEach((option) => {
    option.addEventListener("click", (event) => {
        currentBook.classList.remove(`book_color-${controlColorSize.querySelector(".color_active").dataset.textColor}`)
        controlColorSize.querySelector(".color_active").classList.remove("color_active")
        
        option.classList.add("color_active")
        if (option.classList.contains("text_color_black")){
            currentBook.classList.add(`book_color-${option.dataset.textColor}`)
        } else if (option.classList.contains("text_color_gray")){
            currentBook.classList.add(`book_color-${option.dataset.textColor}`)
        } else {
            currentBook.classList.add(`book_color-${option.dataset.textColor}`)
        }

        event.preventDefault();
    })
})

