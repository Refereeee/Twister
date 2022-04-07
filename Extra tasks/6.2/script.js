const fields = document.querySelectorAll('.field');
const changer = document.querySelector(".changer");
const reset = document.querySelector('.btn');

fields.forEach((el, i) => el.addEventListener('click', changeValueInField));
let currentPlayer = "X";
let arrX = [];
let arrY = [];
let count = 0;
reset.addEventListener('click', () => {
    fields.forEach(el => {
        el.textContent = "";
    })
    arrY=[];
    arrX=[];
    count = 0;
    currentPlayer='X';
    getLocalStorage();
    changePlayerInTitle();

    fields.forEach((el, i) => el.addEventListener('click', changeValueInField));
})

let countWinners= {'X':0,'O':0};

function changeValueInField(e) {
    this.textContent = currentPlayer;
    let thisTarget = e.target.dataset.index;
    console.log(e.target.dataset.index);
    createArrIndex(thisTarget)
    count++

    if (searchWinner(winningConditions, arrX, arrY)) {
        tableAddWinner();
        countWinners[currentPlayer]+=1
        setLocalStorage();
        changerWin();
        // setLocalStorage(currentPlayer,count)
        // tdToLocalStorage();
        // changePlayer();

        fields.forEach((el, i) => el.removeEventListener('click', changeValueInField));

    }
    else if((count != 9) ){
        changePlayer();
        changePlayerInTitle();
    }
    else{
        changerTie()
    }
    this.removeEventListener('click', changeValueInField);
}

function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function changePlayerInTitle(){
    changer.textContent=`Player ${currentPlayer} turn`
}


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



function searchWinner(winningConditions, arrX, arrY) {
    let flag = false
    winningConditions.forEach(e => {

        if (arrX.includes(e[0]) && arrX.includes(e[1]) && arrX.includes(e[2])) {
            flag = true;
        }
        if (arrY.includes(e[0]) && arrY.includes(e[1]) && arrY.includes(e[2])) {
            flag = true;
        }
    })
    return flag
}

function changerWin() {
    changer.textContent = `Player ${currentPlayer} WIN for ${count} steps`
}

function changerTie() {
    changer.textContent = `TIE`;
}

function createArrIndex(i) {
    if (fields[i].textContent === 'X') {
        arrX.push(Number(i));
    } else {
        arrY.push(Number(i));
    }
}

const table = document.querySelector('.table');

function tableAddWinner() {
    createTr()
    createTd(currentPlayer)
    createTd(count)
}
function createTr(){
    const tr = document.createElement('tr');
    table.appendChild(tr)
}
function createTd(name) {
    const td = document.createElement('td');
    td.textContent = `${name}`
    table.appendChild(td)
}

function viewTableLocalStorage(el){
    const div = document.querySelector('.results');
    div.textContent = `Player X win ${el['X']}. Player O win ${el['O']}.`;
}

function setLocalStorage() {

    localStorage.setItem('items',JSON.stringify(countWinners));
}
window.addEventListener('beforeunload', setLocalStorage)

    function getLocalStorage() {
        let loc = JSON.parse(localStorage.getItem('items'));
        if(loc) {
            viewTableLocalStorage(loc);
        }
    }
window.addEventListener('load', getLocalStorage)
