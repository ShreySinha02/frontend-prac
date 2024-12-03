const circle = document.getElementById("circle");

circle.addEventListener("click", () => {
    // Get the current background color of the grandparent element
    let grnd = circle.parentElement.parentElement.style.backgroundColor;

    if (grnd === "black") {
        // Remove animation classes and reset the background color
        circle.classList.remove("animate");
        circle.parentElement.classList.remove("animate2");
        circle.parentElement.parentElement.style.backgroundColor = "rgb(170, 18, 120)";
    } else {
        // Add animation classes and change the background color to black
        circle.classList.add("animate");
        circle.parentElement.classList.add("animate2");
        circle.parentElement.parentElement.style.backgroundColor = "black";
    }
});
