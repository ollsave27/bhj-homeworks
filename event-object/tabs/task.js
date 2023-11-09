const setLinks = document.querySelectorAll(".tab");
const setConts = document.querySelectorAll(".tab__content");

setLinks.forEach((element, index) => {
    element.addEventListener("click", () =>{
        deleteActiviti()
        setLinks[index].classList.add("tab_active")
        setConts[index].classList.add("tab__content_active")
    })    
})

function deleteActiviti(){
    setLinks.forEach((element)=>{
        element.classList.remove("tab_active")
    })
    setConts.forEach((element)=>{
        element.classList.remove("tab__content_active")
    })
}