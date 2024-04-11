let size = parseInt(localStorage.getItem("boardSize")) || 10
var characters = [
    { name: "player", role:"player", coords: [{x: 0, z: 0}] },
    { name: "cat", role:"cat", coords: [{x: randomstartposition(size), z: randomstartposition(size)}] },
    { name: "zombie", role:"zombie", coords: [{x: randomstartposition(size), z: randomstartposition(size)}] }
]

function createGameBoard(rows, columns, characters) {
    let board = new Array(rows);
    for (let i = 0; i < rows; i++) {
        board[i] = new Array(columns)
        for (let j = 0; j < columns; j++) {
            board[i][j] = { x: i, z: j, character: null };
        }
    }

    characters.forEach(char => {
        if (char.coords.length > 0) {
            const {x, z} = char.coords[0]
            if (x >= 0 && x < rows && z >= 0 && z < columns) {
                board[x][z].character = char.name
            }
        }
    });

    return board;
}

function randomstartposition(size) 
{
    return 2 + Math.floor(Math.random() * (size - 2));
}


window.onload = function() {
    let gameBoard = createGameBoard(size, size, characters)

    const boardContainer = document.createElement('div')
    boardContainer.className = "board-container"
    boardContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    gameBoard.forEach(row => {
        row.forEach(cell => {
            const cellElement = document.createElement('div')
            cellElement.className = "board-cell"

            if (cell.character) {
                cellElement.classList.add(`${cell.character}-cell`)
            }

            boardContainer.appendChild(cellElement)
        });
    });

    localStorage.setItem('boardSize', size)
    document.body.appendChild(boardContainer)
    checkMapLimits()
};

function mapLimitsX(characters)
{
    if (characters.coords[0].x === 0)
    {
        document.getElementById("buttonup").style.backgroundColor = "rgba(149, 126, 116, 0.717)"
    }
     else if (characters.coords[0].x === size -1)
     {
        document.getElementById("buttondown").style.backgroundColor = "rgba(149, 126, 116, 0.717)"
     }
    else 
    {
        document.getElementById("buttonup").style.backgroundColor = "rgba(0, 139, 67, 0.717)"
        document.getElementById("buttondown").style.backgroundColor = "rgba(0, 139, 67, 0.717)"
    }
}

function mapLimitsZ(characters)
{
if (characters.coords[0].z === 0)
{
    document.getElementById("buttonleft").style.backgroundColor = "rgba(149, 126, 116, 0.717)"
}
 else if (characters.coords[0].z === size -1)
 {
    document.getElementById("buttonright").style.backgroundColor = "rgba(149, 126, 116, 0.717)"
 }
else 
{
    document.getElementById("buttonleft").style.backgroundColor = "rgba(0, 139, 67, 0.717)"
    document.getElementById("buttonright").style.backgroundColor = "rgba(0, 139, 67, 0.717)"
}
}

function checkMapLimits()
{
    let character = characters.find(char => char.role === "player")

    mapLimitsX(character)
    mapLimitsZ(character)
}


function updateGameBoard()
{
    const boardContainer = document.querySelector('.board-container')
    if (boardContainer) {
        document.body.removeChild(boardContainer)
    }

    let gameBoard = createGameBoard(size, size, characters)
    const newBoardContainer = document.createElement('div')
    newBoardContainer.className = "board-container";
    newBoardContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    gameBoard.forEach(row => {
        row.forEach(cell => {
            const cellElement = document.createElement('div')
            cellElement.className = "board-cell"

            if (cell.character) {
                cellElement.classList.add(`${cell.character}-cell`)
            }

            newBoardContainer.appendChild(cellElement)
        })
    })

    document.body.appendChild(newBoardContainer)
    checkMapLimits()
    checkEncounters()
}
