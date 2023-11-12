function elementRotator (startActiveE) {
    
    let actuRotatorE = startActiveE;
    let nextRotatorE = actuRotatorE.nextElementSibling;
    let rotatorColor = actuRotatorE.dataset.color;
    let rotatorSpeed = actuRotatorE.dataset.speed;
    let firstPart = document.getElementsByTagName('p');
    
        nextRotatorE === null ? 
        nextRotatorE = document.querySelector(".rotator__case") :
        nextRotatorE = nextRotatorE

        actuRotatorE.style.color = rotatorColor;
        firstPart[0].style.color = rotatorColor;
        
        displayText(rotatorSpeed, actuRotatorE, nextRotatorE, firstPart)
}

function displayText(delay, actuRotatorE, nextRotatorE, firstPart) {
    setTimeout(() => {

        nextRotatorE.classList.add("rotator__case_active")
        actuRotatorE.classList.remove("rotator__case_active")
        
        elementRotator(nextRotatorE)

    }, delay, actuRotatorE, nextRotatorE, firstPart)
}

window.document.addEventListener('DOMContentLoaded', elementRotator(document.querySelector(".rotator__case_active")))