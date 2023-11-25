const toolTips = Array.from(document.getElementsByClassName("has-tooltip"))

toolTips.forEach(hintToOpen => {

        hintToOpen.addEventListener("click",  (event) => {

            hintToClose = document.querySelector('.tooltip_active')

            if (hintToOpen.nextSibling.className != 'tooltip tooltip_active' || hintToClose === null){
            let newDiv = document.createElement('div')

                newDiv.classList.add('tooltip')
                newDiv.classList.add('tooltip_active')
                newDiv.setAttribute('style', `left: ${Math.round(hintToOpen.getBoundingClientRect().left)}px; top: ${Math.round(hintToOpen.getBoundingClientRect().bottom)}px`)
                newDiv.textContent  = hintToOpen.getAttribute('title')

                hintToOpen.after(newDiv);   
            }else{
                hintToOpen.nextSibling.remove();
            }
            event.preventDefault();
    })
})