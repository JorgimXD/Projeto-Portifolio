let prevButton = document.getElementById("prev")
let nextButton = document.getElementById("next")
let container = document.querySelector(".container")
let itens = container.querySelectorAll(".list .item")
let indicator = document.querySelector(".indicators")
let dot = indicator.querySelectorAll("ul li")
let list = container.querySelector(".list")

let active = 0
let firstposition = 0
let lastposition = itens.length - 1

function setSlider() {
    let itemOld = container.querySelector(".list .item.active")
    itemOld.classList.remove("active")

    let dotsOld = indicator.querySelector("ul li.active")
    dotsOld.classList.remove("active")
    dot[active].classList.add("active")

    indicator.querySelector(".number").innerHTML = "0" + (active + 1)
}

nextButton.onclick = () => {
    list.style.setProperty("--calculation", 1)
    active = active + 1 > lastposition ? 0 : active + 1
    setSlider()
    itens[active].classList.add("active")
}

prevButton.onclick = () => {
    list.style.setProperty("--calculation", -1)
    active = active - 1 < firstposition ? lastposition : active - 1
    setSlider()
    itens[active].classList.add("active")
}