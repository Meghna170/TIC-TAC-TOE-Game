let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

console.log("welcome to tic-tac-toe game");
let turnO = true;


const winPAttern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const checkWinner = () => {
    let win = "none"
    winPAttern.forEach((pattern) => {
        if (boxes[pattern[0]].innerText == "X" && boxes[pattern[1]].innerText == "X" && boxes[pattern[2]].innerText == "X") {
            win = "X"
        }
        else if (boxes[pattern[0]].innerText == "O" && boxes[pattern[1]].innerText == "O" && boxes[pattern[2]].innerText == "O") {
            win = "O"
        }

    })
    return win;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.clicked) {
            return;
        }
        else {
            box.clicked = true;
        }
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        var win = checkWinner()
        if (win == "X") {
            alert("X is winner")
        }
        else if (win == "O") {
            alert("O is winner")

        }
        else {

        }

    })
});
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""
    })

})
