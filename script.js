let activeBoxIndex = -1;

function animateBox(index) {
    let boxes = document.querySelectorAll(".box");

    if (activeBoxIndex !== -1) {
        let prevBox = boxes[activeBoxIndex];
        prevBox.classList.remove("active");
    }

    let newBox = boxes[index];
    newBox.classList.add("active");

    activeBoxIndex = index;
}
