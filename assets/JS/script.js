function pintar(element, color = "green") {
    element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1")

pintar(ele);

ele.addEventListener("click", () => {
    pintar(ele, "yellow");
});