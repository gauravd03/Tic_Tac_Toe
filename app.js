let boxes = document.querySelectorAll(".box");                                     //querySeletor() -> method of js which retrive matching element form Dom
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;   //playerX ,PlayerO


//possible all winning patterns in tic tac toe
const winPatterns = [                                    //all are wining patterns store as constatnt
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



//logic for boxes after clicking
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })

})


//logic for reset Game
let resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}


//Enable the boxes for reset game
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}


//disabling boxes after get winner
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

//Showing congratulation messsage with name
let showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is  "${winner}"`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


//Logic for finding winner
let checkWinner = () => {
    for (let patterns of winPatterns) {
        //  console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText, boxes[patterns[2]].innerText);

        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}


//Logic for clicking on newButton or newGame button
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);