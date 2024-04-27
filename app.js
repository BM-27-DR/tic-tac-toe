let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".restbtn");
let turn0 = true;
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
let steps = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "0";
            turn0=false;
        }
        else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true;
        count++;
        let iswinner =  checkWinner();
        if(count==9 && !iswinner){
            gameDraw();
        }
    });
});
// let showWinner= (firstval)=>{
//     msg.innerText=`Winner ${firstval}`;
//     msgContainer.classList.remove("hide1");
// }
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };  
let checkWinner = ()=>{
    for(let i of winPatterns){
        let firstval = boxes[i[0]].innerText;
        let secondval = boxes[i[1]].innerText;
        let lastval = boxes[i[2]].innerText;
        if(firstval!=="" && secondval!=="" && lastval!==""){
           if( firstval==secondval && secondval == lastval){
            showWinner(firstval);
              return true;
           }
        }
    }
}
