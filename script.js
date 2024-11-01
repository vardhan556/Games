let boxes = document.querySelectorAll(".box");
let heading = document.querySelectorAll(".heading");
let msg = document.querySelector(".msg");
let newgame = document.querySelector(".newgame-btn");
let resetgame = document.querySelector(".reset-btn");
const winPatterns = [[0,1,2],
                   [0,4,8],
                   [0,3,6],
                   [1,4,7],
                   [2,5,8],
                   [2,4,6],
                   [3,4,5],
                   [6,7,8]];
let turnO = false;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        newgame.classList.add("hide");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;
        checkpatterns();
    });
});
const resetGame = ()=>{
    turnO=true;
    enableboxes();
    msg.classList.add("hide");
}
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const displaywinner = (winner)=>{
    msg.innerText = `congratulations the winner is ${winner}`;
    msg.classList.remove("hide");
    newgame.classList.remove("hide");
    disableboxes();
};
const checkpatterns = ()=>{
    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]].innerText);
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1 !="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                console.log("winner");
                displaywinner(val1);

            }
        }
    }
}

newgame.addEventListener("click",()=>{
    enableboxes();
});

resetgame.addEventListener("click",()=>{
    enableboxes();
})